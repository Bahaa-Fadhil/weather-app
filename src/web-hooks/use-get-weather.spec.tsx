/*
Objective:
The useGetWeather function is a custom hook that retrieves weather data from an external API using the getWeather function and the react-query library. It provides a convenient way to fetch weather data with options such as city name, units, and language, and allows for automatic data refetching at a specified interval.

Inputs:
- options: an object containing optional parameters for the weather API request, including cityName, units, and lang.
- refetchInterval: an optional number representing the interval in milliseconds at which to automatically refetch the weather data.
- isEnabled: an optional boolean indicating whether the hook should be enabled or disabled.

Flow:
1. The useGetWeather function calls the useQuery hook from the react-query library, passing in an array of dependencies, a function to fetch the weather data, and an options object.
2. The dependencies array includes a unique key for the query and an object containing the options passed into the useGetWeather function.
3. The fetch function calls the getWeather function, passing in the options object.
4. The getWeather function constructs a URL for the weather API request using the options object and the API key stored in an environment variable.
5. The getWeather function makes an HTTP GET request to the weather API using the constructed URL and returns the response data.
6. If an error occurs during the API request, the getWeather function logs the error and throws it to be caught by the caller.

Outputs:
- A UseQueryResult object containing the weather data and metadata about the query, such as loading status and error information.

Additional aspects:
- The Weather type is defined as a TypeScript interface and is used to define the shape of the weather data returned by the API.
- The useGetWeather function is a custom hook and can be used in functional components to fetch weather data.
- The useQuery hook from the react-query library provides caching and automatic refetching of data, improving performance and reducing API requests.
*/

import { Weather } from 'src/interfaces';
import { UseGetWeatherOptions, getWeather } from './use-get-weather';
import axios from 'axios';

describe('getWeather_function', () => {
  // Tests that the function successfully fetches weather data for a given city.
  it('test_get_weather_success', async () => {
    const options: UseGetWeatherOptions = { cityName: 'London' };
    const expectedWeatherData: Weather = {
      coord: { lon: -0.1257, lat: 51.5085 },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      base: 'stations',
      main: {
        temp: 16.98,
        feels_like: 16.98,
        temp_min: 15.56,
        temp_max: 18.33,
        pressure: 1016,
        humidity: 77,
        sea_level: 1016,
        grnd_level: 1009,
      },
      visibility: 10000,
      wind: { speed: 2.57, deg: 0, gust: 4.02 },
      clouds: { all: 75 },
      dt: 1634175363,
      sys: {
        type: 2,
        id: 2019646,
        country: 'GB',
        sunrise: 1634147645,
        sunset: 1634183278,
      },
      timezone: 3600,
      id: 2643743,
      name: 'London',
      cod: 200,
    };
    const axiosGetSpy = jest
      .spyOn(axios, 'get')
      .mockResolvedValueOnce({ data: expectedWeatherData });
    const result = await getWeather(options);
    expect(axiosGetSpy).toHaveBeenCalledWith(
      `${process.env['NX_PUBLIC_WEATHER_API']}q=${options.cityName}&units=metric&lang=en&APPID=${process.env['NX_PUBLIC_WEATHRE_API_KEY']}`
    );
    expect(result).toEqual(expectedWeatherData);
    axiosGetSpy.mockRestore();
  });

  // Tests that the function properly handles and logs network errors.
  it('test_get_weather_network_error', async () => {
    const options: UseGetWeatherOptions = { cityName: 'London' };
    const axiosGetSpy = jest
      .spyOn(axios, 'get')
      .mockRejectedValueOnce(new Error('Network Error'));
    console.error = jest.fn();
    await expect(getWeather(options)).rejects.toThrowError();
    expect(console.error).toHaveBeenCalledWith(
      'Error fetching weather data:',
      new Error('Network Error')
    );
    axiosGetSpy.mockRestore();
  });

  // Tests that the function properly handles and logs errors.
  it('test_get_weather_error_handling', async () => {
    const options: UseGetWeatherOptions = { cityName: 'validCity' };
    const expectedError = new Error('Network Error');
    jest.spyOn(axios, 'get').mockRejectedValue(expectedError);
    const consoleSpy = jest
      .spyOn(console, 'error')
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      .mockImplementation(() => {});

    await expect(getWeather(options)).rejects.toThrow(expectedError);
    expect(consoleSpy).toHaveBeenCalledWith(
      'Error fetching weather data:',
      expectedError
    );
  });

  // Tests that the function properly handles rate limiting or other API restrictions.
  it('test_get_weather_rate_limiting', async () => {
    const options: UseGetWeatherOptions = { cityName: 'validCity' };
    const expectedError = new Error('Request failed with status code 429');
    jest.spyOn(axios, 'get').mockRejectedValue(expectedError);

    await expect(getWeather(options)).rejects.toThrow(expectedError);
  });
});
