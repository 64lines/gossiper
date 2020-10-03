const { tryCatch, eq } = require('./sentences');
const { parseHTMLContent } = require('./html');

const ext = (filename) => {
  return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename)[0] : undefined;
};

const isExt = (image, extension) => {
  return eq(ext(image), extension);
};

const isImage = (image) => {
  return isExt(image, 'jpg') || isExt(image, 'png') || isExt(image, 'jpeg') || isExt(image, 'gif');
};

const first = (content) => {
  return content.firstChild;
};

const findImage = (content) => {
  return first(content).childNodes[1].childNodes[1].childNodes[5].childNodes[0];
};

const imgHref = (image) => {
  return image.rawAttributes.href;
};

const successImgUrl = (content) => {
  return imgHref(findImage(parseHTMLContent(content)));
};

const imgUrl = content => tryCatch(content, successImgUrl, () => null);

module.exports.isImage = isImage;
module.exports.imgUrl = imgUrl;
