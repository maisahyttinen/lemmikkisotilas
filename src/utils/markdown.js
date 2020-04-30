import marked from "marked";

export const markdownToHtml = (markdownText) => {
  return marked(markdownText);
};
