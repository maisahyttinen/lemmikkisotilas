export default function (date) {
  if (!date) {
    return undefined;
  }
  if (isFullDate(date)) {
    const dateString = date.split("T")[0];
    const dates = dateString.split("-");
    return {
      year: dates[0],
      month: dates[1],
      day: dates[2],
    };
  }
  const dates = date.split("-");
  return {
    year: dates[0],
    month: dates[1],
    day: dates[2],
  };
}

export const isFullDate = (date) => {
  if (date === undefined) {
  }
  return date.includes("T");
};
