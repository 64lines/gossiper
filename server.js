const { getImageFeed } = require('./controllers/feed');
const express = require('express');
const app = express();
const path = require('path');
const open = require('open');
const config = require('config');

const PORT = 8888;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'views/public')));

app.get('/api', async (req, res) => {
  res.set('Content-Type', 'application/json');
  res.send({
    entries: await getImageFeed(
      config.get('rss_feed_list'),
      config.get('rss_item_limit')
    )
  });
});

app.get('/', (req, res) => {
  res.render('index', {
    title: config.get('title'),
    description: config.get('description'),
    loadingMessage: config.get('loading_message')
  });
});

app.listen(PORT);
console.log(`The server is running at ${PORT}`);

(async () => {
  await open(`http://localhost:${PORT}`, { wait: true });
})();
