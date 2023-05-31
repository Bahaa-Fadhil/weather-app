import { calculateTimestampFromUnix } from './calculate-timestamp-from-unix';

/*
Objective:
The objective of the formatTime function is to receive a Unix timestamp and convert it 
to a human-readable time format in the HH:MM format.

Inputs:
- unixTimestamp: a number representing the Unix timestamp in seconds.

Flow:
1. Multiply the Unix timestamp by 1000 to convert it to milliseconds.
2. Create a new Date object with the converted Unix timestamp.
3. Get the hours from the Date object and convert it to a 2-digit string format with leading zeros if necessary.
4. Get the minutes from the Date object and convert it to a 2-digit string format with leading zeros if necessary.
5. Concatenate the hours and minutes with a colon separator to form the time in the HH:MM format.
6. Return the time string.

Outputs:
- time: a string representing the time in the HH:MM format.
*/
describe('formatTime_function', () => {
  // Tests that the function always returns a string in the format HH:MM.
  it('test_format_time_returns_correct_format', () => {
    const unixTimestamp = 1634567890;
    const expectedTime = '14:38';
    expect(calculateTimestampFromUnix(unixTimestamp)).toBe(expectedTime);
  });

  // Tests that the function handles negative Unix timestamps correctly.
  it('test_format_time_handles_negative_unix_timestamp', () => {
    const unixTimestamp = -1634567890;
    const expectedTime = '09:21';
    expect(calculateTimestampFromUnix(unixTimestamp)).toBe(expectedTime);
  });

  // Tests that the function handles Unix timestamps that exceed the maximum value of a 32-bit integer correctly.
  it('test_format_time_handles_unix_timestamp_exceeding_max_value', () => {
    const unixTimestamp = 2147483648;
    const expectedTime = '03:14';
    expect(calculateTimestampFromUnix(unixTimestamp)).toBe(expectedTime);
  });

  // Tests that the function handles leap seconds correctly.
  it('test_format_time_handles_leap_seconds', () => {
    const timestamp = 1483228799; // December 31, 2016 23:59:59 (leap second)
    expect(calculateTimestampFromUnix(timestamp)).toBe('23:59');
  });
});
