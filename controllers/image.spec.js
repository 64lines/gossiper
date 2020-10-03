const { isImage } = require('./image');

it('Image validation is wrong', () => {
  expect(isImage('test.jpg')).toBe(true);
  expect(isImage('test.png')).toBe(true);
  expect(isImage('test.jpeg')).toBe(true);
  expect(isImage('test.gif')).toBe(true);
  expect(isImage('test.bmp')).toBe(false);
  expect(isImage('test.mp3')).toBe(false);
  expect(isImage('test.wav')).toBe(false);
  expect(isImage('test.txt')).toBe(false);
  expect(isImage('test.js')).toBe(false);
});
