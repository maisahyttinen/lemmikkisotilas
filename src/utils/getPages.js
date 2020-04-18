import _ from "lodash";
import { getSeparateDate } from ".";

export default function (pages, folderPath, maxPages) {
  // TODO: resolve relative paths relative to current page
  folderPath = folderPath.replace(/^\//, "");

  const posts = _.filter(pages, { relativeDir: folderPath }).sort((a, b) => {
    const dateA = getSeparateDate(a.frontmatter.date);
    const dateB = getSeparateDate(b.frontmatter.date);

    const dateAObj = new Date().setFullYear(dateA.year, dateA.month, dateA.day);
    const dateBObj = new Date().setFullYear(dateB.year, dateB.month, dateB.day);

    if (dateAObj < dateBObj) {
      return -1;
    }
    if (dateBObj < dateAObj) {
      return 1;
    }
    return 0;
  });

  if (maxPages) {
    return posts.slice(posts.length - maxPages, posts.length);
  } else {
    return posts;
  }
}
