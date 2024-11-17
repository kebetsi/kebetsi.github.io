const http = require('http');
const formData = require('form-data');
// const fs = require('fs');

const PORT = '9876';
const HOST = '127.0.0.1';

const message1 = JSON.stringify({ hello: 'world' });
const message2 = Buffer.from('foo=bar');
// const message2 = fs.readFileSync('path/to/my/file');

const requestHandler = (request, response) => {
  let data = '';
  request.on('data', chunk => (data += chunk));
  request.on('end', () => {

    const boundary = '---------9051914041544843365972754266';
    const contentTypeHeader = `multipart/form-data; boundary=${boundary}`;
    let firstPart = '';
    firstPart += `--${boundary}`;
    firstPart += `\r\n`;
    firstPart += `Content-Disposition: form-data; name="message1"`;
    firstPart += `\r\n`;
    firstPart += `\r\n`;
    firstPart += `${message1}`;
    firstPart += `\r\n`;
    firstPart += `--${boundary}`;
    firstPart += `\r\n`;
    firstPart += `Content-Disposition: form-data; name="message2"`;
    firstPart += `\r\n`;
    firstPart += `Content-Type: application/octet-stream`;
    firstPart += `\r\n`;
    firstPart += `\r\n`;
    let lastPart = '';
    lastPart += `\r\n`;
    lastPart += `--${boundary}--`;
    lastPart += `\r\n`;
    const body = Buffer.concat([Buffer.from(firstPart), message2, Buffer.from(lastPart)]);
    const contentLength = body.length;
    response.writeHead(200, {
      'Content-Type': contentTypeHeader,
      'Content-Length': contentLength,
    });
    response.end(body);
  });
};

const server = http.createServer(requestHandler);

server.listen(PORT, HOST, err => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on ${HOST}:${PORT}`);
});