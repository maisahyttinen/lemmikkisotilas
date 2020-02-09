import _ from "lodash";

export default function(pages, folderPath, maxPages) {
  // TODO: resolve relative paths relative to current page
  folderPath = folderPath.replace(/^\//, "");

  const posts = _.filter(pages, { relativeDir: folderPath }).sort((a, b) => {
    const dateA = a.frontmatter.date.split("-");
    const dateB = b.frontmatter.date.split("-");

    const dateAObj = new Date().setFullYear(dateA[0], dateA[1], dateA[2]);
    const dateBObj = new Date().setFullYear(dateB[0], dateB[1], dateB[2]);

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
