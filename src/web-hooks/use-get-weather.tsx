import { UseQueryResult, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Weather } from 'src/interfaces';

export const USE_GET_WEATHER_QUERY = 'USE_GET_WEATHER_QUERY';

export type UseGetWeatherOptions = Readonly<{
  cityName?: string;
  units?: string;
  lang?: string;
}>;

/**
 * Fetchs weather over HTTPS.
 */
export const getWeather = async (
  options: UseGetWeatherOptions
): Promise<Weather> => {
  try {
    const { data } = await axios.get<Weather>(
      `${process.env['NX_PUBLIC_WEATHER_API']}q=${options.cityName}&units=${
        options.units ? options.units : 'metric'
      }&lang=${options.lang ? options.lang : 'en'}&APPID=${
        process.env['NX_PUBLIC_WEATHRE_API_KEY']
      }`
    );

    return data;
  } catch (error) {
    // Handle the error here.
    console.error('Error fetching weather data:', error);
    // Rethrow the error to be caught by the caller.
    throw error;
  }
};

/**
 * Requests weather from  openWeatherMap  API over HTTPS.
 */
export const useGetWeather = (
  options: UseGetWeatherOptions,
  refetchInterval?: number,
  isEnabled?: boolean
): UseQueryResult<Weather> => {
  return useQuery(
    [
      USE_GET_WEATHER_QUERY,
      { cityName: options.cityName, units: options.units, lang: options.lang },
    ],
    () => getWeather(options),
    {
      refetchOnWindowFocus: false,
      // Refetch the data regularly with our set refetch interval.
      refetchInterval,
      staleTime: 60 * 1000,
      enabled: isEnabled === undefined ? true : isEnabled,
      placeholderData: null,
    }
  );
};
