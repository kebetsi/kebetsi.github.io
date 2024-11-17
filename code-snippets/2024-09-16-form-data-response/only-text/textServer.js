const http = require('http');
const app = require('express')();
const formData = require('form-data');
const PORT = '9876';
const HOST = '127.0.0.1';

const message1 = JSON.stringify({ hello: 'world' });
const message2 = JSON.stringify({ foo: 'bar' });

const requestHandler = ((_, response) => {
  const fd = new formData();
  fd.append('message1', message1);
  fd.append('message2', message2);
  // generates the "multipart/form-data; boundary=..." header
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