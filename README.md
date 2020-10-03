# The Gossiper

The Gossiper is a NodeJS server application that allows you to have a custom website that you can fill with your favorite Subreddits.

## Installation and execution

You can install the package libraries with the following commands:
```sql
npm install
```
or
```sql
yarn
```

You can execute the server using the following commands:
```sql
npm start
```
or
```sql
yarn start
```

Additionally you can set your reddit feeds on the `config/default.yaml` file on the `rss_feed_list` property like this:

```yaml
rss_feed_list: [
    https://www.reddit.com/r/mathmemes/,
    https://www.reddit.com/r/interestingasfuck/,
    https://www.reddit.com/r/PenmanshipPorn/,
    https://www.reddit.com/r/ProgrammerHumor/,
]
```

Also you can change the name of the site and its description modifying the `title` and `description` parameters

```yaml
title: The Gossiper
description: The place where your favorite image feeds
```

The `rss_item_limit` describes how many items are going to be gathered from each subreddit, the higher the number the higher is the amount of time the user would need to wait until all the images are completely loaded.

```yaml
rss_item_limit: 200
```