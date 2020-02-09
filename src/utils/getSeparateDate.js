export default function(dashDate) {
  let year,
    month,
    day = "";

  if (dashDate) {
    const dates = dashDate.split("-");
    year = dates[0];
    month = dates[1];
    day = dates[2];
  }
  return { year, month, day };
}
