it('gets the generated test.txt file', async () => {
  const baseUrl = global['baseUrl'];

  const response = await page.request.fetch(`${baseUrl}/test.txt`);
  expect(response.status()).toBe(200);
  const txt = await response.text();
  expect(txt).toBe('Hello repro');
});
