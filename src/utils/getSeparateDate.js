export default function(dashDate) {
  const dates = dashDate.split("-");
  const year = dates[0];
  const month = dates[1];
  const day = dates[2];
  return { year, month, day };
}
