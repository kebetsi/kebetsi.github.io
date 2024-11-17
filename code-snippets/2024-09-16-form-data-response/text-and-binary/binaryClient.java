import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.http.HttpResponse.BodyHandlers;
import java.net.URI;
import java.net.URISyntaxException;
import java.nio.charset.StandardCharsets;
import java.time.Duration;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

public class MyClientData {

  public record MyApiResponse(String message1, byte[] message2) {};

  public static MyApiResponse parseFormData(String contentTypeHeader, byte[] responseBody) {
    String boundary = "--" + contentTypeHeader.split("boundary=")[1];
    byte[] boundaryBytes = boundary.getBytes(StandardCharsets.ISO_8859_1);
    List<byte[]> parts = split(responseBody, boundaryBytes);

    String message1 = null;
    byte[] message2 = null;

    for (byte[] part : parts) {
      int separatorIndex = indexOf(part, "\r\n\r\n".getBytes(StandardCharsets.ISO_8859_1));
      if (separatorIndex == -1) {
        // Skip if there's no body
        continue;
      }

      // I remove the first 2 bytes, representing "\r\n" before the headers
      byte[] headers = Arrays.copyOfRange(part, 2, separatorIndex);
      // I remove the first 4 bytes and last 2.
      // They are the "\r\n\r\n" before and "\r\n" after the payload
      byte[] body = Arrays.copyOfRange(part, separatorIndex + 4, part.length - 2);

      String headersStr = new String(headers, StandardCharsets.UTF_8);

      if (headersStr.contains("message1")) {
        message1 = new String(body, StandardCharsets.UTF_8);
      } else if (headersStr.contains("message2")) {
        message2 = body;
      }
    }
    if (message1 == null || message2 == null) {
      throw new IllegalStateException("Data missing from response");
    }
    return new MyApiResponse(message1, message2);
  }

  private static int indexOf(byte[] array, byte[] pattern) {
    for (int i = 0; i < array.length - pattern.length + 1; i++) {
      boolean found = true;
      for (int j = 0; j < pattern.length; j++) {
        if (array[i + j] != pattern[j]) {
          found = false;
          break;
        }
      }
      if (found) return i;
    }
    return -1;
  }

  private static List<byte[]> split(byte[] array, byte[] delimiter) {
    List<byte[]> byteArrays = new LinkedList<>();
    if (delimiter.length == 0) {
      return byteArrays;
    }
    int begin = 0;

    outer:
    for (int i = 0; i < array.length - delimiter.length + 1; i++) {
      for (int j = 0; j < delimiter.length; j++) {
        if (array[i + j] != delimiter[j]) {
          continue outer;
        }
      }
      byteArrays.add(Arrays.copyOfRange(array, begin, i));
      begin = i + delimiter.length;
    }
    byteArrays.add(Arrays.copyOfRange(array, begin, array.length));
    return byteArrays;
  }

  public static MyApiResponse sendRequest(String host, int port) throws Exception {
    HttpRequest request =
      HttpRequest
        .newBuilder(url(host, port, "hello"))
        .GET()
        .build();
    HttpClient client =
      HttpClient
        .newBuilder()
        .connectTimeout(Duration.ofSeconds(30))
        .build();
    HttpResponse<byte[]> response =
      client
        .send(request, BodyHandlers.ofByteArray());
    String contentTypeHeader = response.headers()
      .firstValue("Content-Type")
      .orElseThrow(() -> new IllegalStateException("No Content-Type header"));
    byte[] responseBody = response.body();
    return parseFormData(contentTypeHeader, responseBody);
  }

  private static URI url(String host, int port, String endpoint) {
    try {
      return new URI("http", null, host, port, "/" + endpoint, null, null);
    } catch (URISyntaxException e) {
      throw new IllegalStateException("Invalid URI: " + e.getMessage(), e);
    }
  }

  public static void main(String[] args) throws Exception {
    MyApiResponse response = sendRequest("localhost", 9876);
    System.out.println(response.message1() + " " + new String(response.message2(), StandardCharsets.UTF_8)); // {"hello":"world"} foo=bar
  }
}