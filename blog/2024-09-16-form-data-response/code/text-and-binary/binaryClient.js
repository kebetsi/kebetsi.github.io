async function request(host, port) {
  const res = await fetch(`http://${host}:${port}/hello`);
  const fd = await res.formData();
  const message1 = fd.get('message1');
  const message2 = fd.get('message2');
  const buffer = Buffer.from(await message2.arrayBuffer());
  return [message1, buffer];
}

(async () => {
  const response = await request('localhost', 9876)
  console.log(response[0], response[1].toString()); // {"hello":"world"} foo=bar
})();