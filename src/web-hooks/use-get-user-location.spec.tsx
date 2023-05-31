/*
Objective:
The objective of the function is to retrieve the user's current location by making an API call 
and returning the city, region, country, latitude, and longitude as a CityInfo object.

Inputs:
- None

Flow:
1. The function makes an API call to retrieve the user's current location using axios.
2. If the response status is between 200 and 299, the function returns the data as a CityInfo object.
3. If the response status is outside of that range, the function throws an error with the status code.
4. If there is an error during the API call, the function logs the error and rethrows it.

Outputs:
- A CityInfo object containing the user's current location.

Additional aspects:
- The function is asynchronous and returns a Promise.
- The function is used as a callback for the useQuery hook in the useGetUserLocation function.
- The function handles errors by logging them and rethrowing them to be caught by the caller.
*/

import { CityInfo } from 'src/interfaces';
import { getUserLocation } from './use-get-user-location';
import axios from 'axios';

describe('getUserLocation_function', () => {
  // Tests that the function returns a CityInfo object when the API call is successful.
  it('test_successful_api_call', async () => {
    const expectedCityInfo: CityInfo = {
      city: 'New York',
      region: 'New York',
      country: 'United States',
      latitude: 40.7128,
      longitude: -74.006,
    };
    jest
      .spyOn(axios, 'get')
      .mockResolvedValueOnce({ status: 200, data: expectedCityInfo });
    const result = await getUserLocation();
    expect(result).toEqual(expectedCityInfo);
  });

  // Tests that the function throws an error with the correct status code when the API call returns an error status code.
  it('test_error_status_code', async () => {
    const expectedStatusCode = 404;
    jest
      .spyOn(axios, 'get')
      .mockResolvedValueOnce({ status: expectedStatusCode });
    await expect(getUserLocation()).rejects.toThrow(
      `Server responded with status code ${expectedStatusCode}`
    );
  });

  // Tests that the function throws an error when the API call fails.
  it('test_api_call_failure', async () => {
    jest.spyOn(axios, 'get').mockRejectedValueOnce(new Error('Network Error'));
    await expect(getUserLocation()).rejects.toThrow('Network Error');
  });

  // Tests that the function handles errors correctly and logs them.
  it('test_error_handling', async () => {
    const consoleSpy = jest
      .spyOn(console, 'error')
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      .mockImplementation(() => {});
    jest.spyOn(axios, 'get').mockRejectedValueOnce(new Error('Network Error'));
    await expect(getUserLocation()).rejects.toThrow('Network Error');
    expect(consoleSpy).toHaveBeenCalledWith(
      'Error fetching weather data:',
      new Error('Network Error')
    );
  });

  // Tests the function with different environment variables.
  it('test_different_env_variables', async () => {
    process.env['NX_PUBLIC_USER_LOCATION_API'] = 'https://different-api.com';
    jest.spyOn(axios, 'get').mockResolvedValueOnce({ status: 200, data: {} });
    await getUserLocation();
    expect(axios.get).toHaveBeenCalledWith('https://different-api.com');
  });
});
