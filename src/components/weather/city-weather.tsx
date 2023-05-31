import { Box, Grid } from '@mui/material';
import { memo } from 'react';
import { CityInfo } from 'src/interfaces';
import { CityContainer } from './city-contianer';

type Props = Readonly<{
  cities: CityInfo[];
}>;

export const CityWeather = memo(({ cities }: Props): JSX.Element => {
  if (cities)
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '25px',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <Grid
          container
          spacing={4}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {cities.map((city, index) => (
            <Grid item key={index}>
              <CityContainer city={city} isCurrentUserLocation={index === 0} />
            </Grid>
          ))}
        </Grid>
      </Box>
    );

  return <div></div>;
});
