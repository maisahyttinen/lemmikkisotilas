import { getSeparateDate } from ".";

export default function (pages, year) {
  return pages
    .filter(
      (page) =>
        page.relativeDir === "posts" &&
        page.frontmatter.date.split("-")[0] === year
    )
    .sort((a, b) => {
      const dateA = getSeparateDate(a.frontmatter.date);
      const dateB = getSeparateDate(b.frontmatter.date);

      const dateAObj = new Date().setFullYear(
        dateA.year,
        dateA.month,
        dateA.day
      );
      const dateBObj = new Date().setFullYear(
        dateB.year,
        dateB.month,
        dateB.day
      );

      if (dateAObj < dateBObj) {
        return -1;
      }
      if (dateBObj < dateAObj) {
        return 1;
      }
      return 0;
    });
}
