const { parseHTMLContent } = require('./html');

it('content is not parsed', () => {
  const parsedContent = parseHTMLContent(`<div><a href="${testUrl()}">Test</a></div>`);
  expect(href(find(parsedContent))).toBe(testUrl());
});

const href = element => element.rawAttributes.href;

const find = content => content.firstChild.childNodes[0];

const testUrl = () => 'https://www.test.com';
