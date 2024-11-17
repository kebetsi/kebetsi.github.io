
const http = require('http');
const formData = require('form-data');
const PORT = '9876';
const HOST = '127.0.0.1';

const message1 = JSON.stringify({ hello: 'world' });
const message2 = JSON.stringify({ foo: 'bar' });

const requestHandler = (request, response) => {
  let data = '';
  request.on('data', chunk => (data += chunk));
  request.on('end', () => {
    // do something with the incoming data if needed
    const boundary = '---------9051914041544843365972754266';
    const contentTypeHeader = `multipart/form-data; boundary=${boundary}`;
    let body = '';
    body += `--${boundary}`;
    body += `\r\n`;
    body += `Content-Disposition: form-data; name="message1"`;
    body += `\r\n`;
    body += `\r\n`;
    body += `${message1}`;
    body += `\r\n`;
    body += `--${boundary}`;
    body += `\r\n`;
    body += `Content-Disposition: form-data; name="message2"`;
    body += `\r\n`;
    body += `\r\n`;
    body += `${message2}`;
    body += `\r\n`;
    body += `--${boundary}--`;
    body += `\r\n`;
    response.writeHead(200, {
      'Content-Type': contentTypeHeader,
      'Content-Length': Buffer.byteLength(body, 'utf-8'),
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