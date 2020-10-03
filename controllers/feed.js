const RSSParser = require('rss-parser');
const { isImage, imgUrl } = require('./image');
const { randFunct } = require('./numbers');

const getImageFeed = async (rssFeedList, rssItemLimit) => {
  return formatFeed(await feedTransformed(rssFeedList, rssItemLimit));
};

const isItemImage = (item) => {
  return item && isImage(item.image);
};

const formatFeed = (feedList) => {
  return feedList.map(item => ({
    title: item.title,
    image: imgUrl(item.content)
  })).filter(isItemImage).sort(randFunct);
};

const urlFeed = (feedUrl, limit) => {
  return `${feedUrl}.rss?limit=${limit}`;
};

const fetchRSSData = (feedUrl, limit) => {
  return new RSSParser().parseURL(urlFeed(feedUrl, limit));
};

const getFeed = async (rssFeedList, limit) => {
  return await Promise.all(getRequests(rssFeedList, limit));
};

const feedTransformed = async (rssFeedList, rssItemLimit) => {
  return transformItems(await getFeed(rssFeedList, rssItemLimit));
};

const getRequests = (rssFeedList, limit) => {
  return rssFeedList.map((feedUrl) => fetchRSSData(feedUrl, limit));
};

const transformItems = (results) => {
  return results.map(result => result.items).flat();
};

module.exports.urlFeed = urlFeed;
module.exports.getImageFeed = getImageFeed;
module.exports.transformItems = transformItems;
