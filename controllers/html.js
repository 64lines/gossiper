const HTMLParser = require('node-html-parser');

const parseHTMLContent = content => HTMLParser.parse(content);

module.exports.parseHTMLContent = parseHTMLContent;
