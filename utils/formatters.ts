export const formatToDollar = (amount: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "decimal",
    currency: "CAD",
    minimumFractionDigits: 2,
  }).format(amount);
};

export const formatDate = (date: Date): string => {
  const days = date.getDate(); // Get the day of the month (1-31)
  const year = date.getFullYear(); // Get the full year (YYYY)

  // Array of month names (first three letters)
  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const month = monthNames[date.getMonth()]; // Get the abbreviated month name

  // Construct the formatted date string
  return `${days} ${month} ${year}`;
};
