const { urlFeed, transformItems } = require('./feed');

it('The url feed is wrong', () => {
  expect(urlFeed('http://www.test.com/', '100')).toBe('http://www.test.com/.rss?limit=100');
});

it('The item transformation is wrong', () => {
  expect(transformItems([
    { id: 1, items: [1, 2, 3] },
    { id: 2, items: [4, 5, 6] }
  ])).toEqual([1, 2, 3, 4, 5, 6]);
});
