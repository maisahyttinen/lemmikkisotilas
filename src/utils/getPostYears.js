export default function(pages) {
  return pages
    .filter(page => page.relativeDir === "posts")
    .map(page => page.frontmatter.date.split("-")[0])
    .sort((a, b) => {
      const dateAObj = new Date().setFullYear(a);
      const dateBObj = new Date().setFullYear(b);

      if (dateAObj < dateBObj) {
        return 1;
      }
      if (dateBObj < dateAObj) {
        return -1;
      }
      return 0;
    })
    .filter((x, i, a) => a.indexOf(x) === i);
}
