const { tryCatch, eq } = require('./sentences');
const { parseHTMLContent } = require('./html');

const ext = filename => (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename)[0] : undefined;

const isGif = image => eq(ext(image), 'gif');

const isJpg = image => eq(ext(image), 'jpg');

const isPng = image => eq(ext(image), 'png');

const isJpeg = image => eq(ext(image), 'jpeg');

const isImage = image => isJpg(image) || isPng(image) || isJpeg(image) || isGif(image);

const first = content => content.firstChild;

const findImage = content => {
  return first(content).childNodes[1].childNodes[1].childNodes[5].childNodes[0];
};

const imgHref = image => image.rawAttributes.href;

const successImgUrl = content => imgHref(findImage(parseHTMLContent(content)));

const failImageUrl = () => null;

const imgUrl = content => tryCatch(content, successImgUrl, failImageUrl);

module.exports.isImage = isImage;
module.exports.imgUrl = imgUrl;
