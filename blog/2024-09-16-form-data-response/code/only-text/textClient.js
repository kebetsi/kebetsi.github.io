async function request(host, port) {
  const res = await fetch(`http://${host}:${port}/hello`);
  const fd = await res.formData();
  const message1 = fd.get('message1');
  const message2 = fd.get('message2');
  return [message1, message2];
}

(async () => {
  const response = await request('localhost', 9876)
  console.log(response); // [ '{"hello":"world"}', '{"foo":"bar"}' ]
})();