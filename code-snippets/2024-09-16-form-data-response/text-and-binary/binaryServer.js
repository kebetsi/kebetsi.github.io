const http = require('http');
const app = require('express')();
const formData = require('form-data');
// const fs = require('fs');

const PORT = '9876';
const HOST = '127.0.0.1';

const message1 = JSON.stringify({ hello: 'world' });
const message2 = Buffer.from('foo=bar');
// const message2 = fs.readFileSync('path/to/my/file');

const requestHandler = ((_, response) => {
  const fd = new formData();
  fd.append('message1', message1);
  fd.append('message2', message2);
  response.set('Content-Type', fd.getHeaders()['content-type']);
  response.set('Content-Length', fd.getLengthSync());
  fd.pipe(response);
});

app.use(requestHandler);

const server = http.createServer(app);
server.listen(PORT, HOST, err => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on ${HOST}:${PORT}`);
});