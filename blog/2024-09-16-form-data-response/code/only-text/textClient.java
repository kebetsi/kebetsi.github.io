import java.net.URI;
import java.net.URISyntaxException;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.http.HttpResponse.BodyHandlers;
import java.time.Duration;

public class MyClient {

  public record MyApiResponse(String message1, String message2) {};

  public static MyApiResponse parseFormData(String contentTypeHeader, String responseBody) {
    String boundary = "--" + contentTypeHeader.split("boundary=")[1];
    String[] parts = responseBody.split(boundary);
    String message1 = null;
    String message2 = null;
    for (String part : parts) {
      // Split the part into headers and body
      int separatorIndex = part.indexOf("\r\n\r\n");
      if (separatorIndex == -1) {
        // Skip if there's no body
        continue;
      }
      // I remove the first 2 bytes, representing "\r\n" before the headers
      String headers = part.substring(2, separatorIndex);
      // I remove the first 4 bytes and last 2.
      // They are the "\r\n\r\n" before and "\r\n" after the payload
      String partBody = part.substring(separatorIndex + 4, part.length() - 2);

      if (headers.contains("message1")) {
        message1 = partBody;
      } else if (headers.contains("message2")) {
        message2 = partBody;
      }
    }
    if (message1 == null || message2 == null) {
      throw new IllegalStateException("Data missing from response");
    }
    return new MyApiResponse(message1, message2);
  }

  public static MyApiResponse sendRequest(String host, int port) throws Exception {
    HttpRequest request =
      HttpRequest
        .newBuilder()
        .uri(url(host, port, "hello"))
        .GET()
        .build();
    HttpClient client =
      HttpClient
        .newBuilder()
        .connectTimeout(Duration.ofSeconds(30))
        .build();
    HttpResponse<String> response =
      client
        .send(request, BodyHandlers.ofString());
    String contentTypeHeader = response.headers()
      .firstValue("Content-Type")
      .orElseThrow(() -> new IllegalStateException("No Content-Type header"));
    String responseBody = response.body();
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
    System.out.println(response); // MyApiResponse[message1={"hello":"world"}, message2={"foo":"bar"}]
  }
}