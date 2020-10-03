const HTMLParser = require('node-html-parser');

const parseHTMLContent = (content) => {
  return HTMLParser.parse(content);
};

module.exports.parseHTMLContent = parseHTMLContent;
