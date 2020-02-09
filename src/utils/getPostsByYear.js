export default function(pages, year) {
  return pages
    .filter(
      page =>
        page.relativeDir === "posts" &&
        page.frontmatter.date.split("-")[0] === year
    )
    .sort((a, b) => {
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
}
