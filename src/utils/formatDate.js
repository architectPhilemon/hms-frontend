/**
 * Simple date formatter for display.
 * Accepts ISO strings or Date objects.
 */
export default function formatDate(dateInput, options = {}) {
  if (!dateInput) return "";
  const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;
  const formatter = new Intl.DateTimeFormat(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
    ...options,
  });
  return formatter.format(date);
}
