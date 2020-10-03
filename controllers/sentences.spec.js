const { eq } = require('./sentences');

it('Equality validation is wrong', () => {
  expect(eq(1, 2)).toBe(false);
  expect(eq(1, 1)).toBe(true);
  expect(eq('1', 1)).toBe(false);
  expect(eq('1', '1')).toBe(true);
  expect(eq('1', '2')).toBe(false);
});
