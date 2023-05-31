/**
 * Utility function to format time from Unix timestamp
 * @param unixTimestamp
 * @returns
 */
export const calculateTimestampFromUnix = (unixTimestamp: number) => {
  // Convert seconds to milliseconds
  const date = new Date(unixTimestamp * 1000);
  // Get hours in 2-digit format
  const hours = date.getUTCHours().toString().padStart(2, '0');
  // Get minutes in 2-digit format
  const minutes = date.getMinutes().toString().padStart(2, '0');
  // Format hours and minutes as HH:MM
  const time = `${hours}:${minutes}`;

  return time;
};
