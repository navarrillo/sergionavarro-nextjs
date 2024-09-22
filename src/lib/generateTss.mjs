import RSS from "rss";
import fs from "fs";

export default async function generateRssFeed() {
  const site_url = "https://sergionavarro.me";

  const feedOptions = {
    title: "SergioNavarro.me",
    description: "Software engineer empowered by AI",
    site_url: site_url,
    feed_url: `${site_url}/rss.xml`,
    image_url: `${site_url}/logo.png`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, Your Name`,
  };

  const feed = new RSS(feedOptions);

  // Add your blog posts here
  // Example:
  // feed.item({
  //   title: 'My blog #1',
  //   description: 'Description of blog post',
  //   url: `${site_url}/blog/my-blog-1`,
  //   date: new Date('2024-09-01')
  // });

  // Write the RSS feed to a file
  const rssFolder = "./public";
  const rssFile = `${rssFolder}/rss.xml`;

  fs.mkdirSync(rssFolder, { recursive: true });
  fs.writeFileSync(rssFile, feed.xml({ indent: true }));
}
