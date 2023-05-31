import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

import { useGetUserLocation } from 'src/web-hooks';
import { staticCities } from 'src/data/default-cities';
import { CityInfo } from 'src/interfaces';
import { CityWeather } from './weather/city-weather';

const REFRESH_RATE_IN_MILLISECONDS = 60 * 1000;

export const WeatherDashboard = () => {
  const { data: userLocation } = useGetUserLocation(
    REFRESH_RATE_IN_MILLISECONDS
  );
  const [cities, setCities] = useState<CityInfo[]>([]);

  useEffect(() => {
    if (!userLocation) return;

    // Add the user's current location to the static cities list
    const updatedCities = [...staticCities, userLocation];

    // Sort the array to have userLocation as the first item
    updatedCities.sort((a, b) => {
      if (a === userLocation) return -1;
      if (b === userLocation) return 1;
      return 0;
    });

    setCities(updatedCities);
  }, [userLocation]);

  return (
    <Box>
      <CityWeather cities={cities} />
    </Box>
  );
};
