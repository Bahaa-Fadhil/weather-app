import { UseQueryResult, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { CityInfo } from 'src/interfaces';

export const USE_GET_USER_LOCATION = 'USE_GET_USER_LOCATION';

/**
 * Fetchs user location over HTTPS.
 */
export const getUserLocation = async (): Promise<CityInfo> => {
  try {
    // Get the user's current location
    const response = await axios.get<CityInfo>(
      `${process.env['NX_PUBLIC_USER_LOCATION_API']}`
    );

    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      throw new Error(`Server responded with status code ${response.status}`);
    }
  } catch (error) {
    // Handle the error here
    console.error('Error fetching weather data:', error);
    // Rethrow the error to be caught by the caller
    throw error;
  }
};

/**
 * Requests user location from the ip-adresse over HTTPS.
 */
export const useGetUserLocation = (
  refetchInterval?: number
): UseQueryResult<CityInfo> => {
  return useQuery([USE_GET_USER_LOCATION, {}], () => getUserLocation(), {
    refetchOnWindowFocus: false,
    // Refetch the data regularly with our set refetch interval.
    refetchInterval,
  });
};
