import { Box, Typography } from '@mui/material';
import { memo, useState } from 'react';
import { CityInfo } from 'src/interfaces';
import { useGetWeather } from 'src/web-hooks';
import { GetWeatherIcon } from 'src/utils';
import WeatherDetailsDialog from '../weather-details/weather-details-dialog';
import { useWeatherSettingsLanguage, useWeatherSettingsUnite } from 'src/store';

type Props = Readonly<{
  city: CityInfo;
  isCurrentUserLocation: boolean;
}>;

const REFRESH_RATE_IN_MILLISECONDS = 60 * 1000;

export const CityContainer = memo(
  ({ city, isCurrentUserLocation }: Props): JSX.Element => {
    const { language } = useWeatherSettingsLanguage((state) => state);
    const { unite } = useWeatherSettingsUnite((state) => state);

    // Fetches weather data using the custom hook.
    // TODO: Store setting on local storage.
    const { data: weatherData } = useGetWeather(
      { cityName: city.city, units: unite, lang: language },
      REFRESH_RATE_IN_MILLISECONDS
    );

    // State to manage the visibility of the weather details dialog.
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    if (weatherData)
      return (
        <Box
          sx={{
            position: 'relative',
            backgroundColor: 'rgb(0 0 0 / 30%)',
            border: '2px solid rgba(0 0 0 / 30%)',
            boxShadow: '2px 2px 4px rgba(0 0 0 / 30%)',
            borderRadius: '8px',
            minWidth: '350px',
            minHeight: '180px',
            color: 'white',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              borderRadius: '5px',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}
            onClick={handleClickOpen}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                margin: '2px',
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: '500',
                  textAlign: 'center',
                  fontSize: {
                    xs: 'h5.fontSize',
                    sm: 'h5.fontSize',
                    md: 'h5.fontSize',
                  },
                }}
              >
                {isCurrentUserLocation
                  ? language.includes('no')
                    ? `Min posisjon`
                    : 'My location'
                  : weatherData.name}
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: '500',
                  textAlign: 'center',
                  margin: '6px',
                }}
              >
                {weatherData.main.temp.toFixed(0)}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: '500',
                  textAlign: 'center',
                  margin: '4px',
                  fontSize: {
                    xs: 'h5.fontSize',
                    sm: 'h5.fontSize',
                    md: 'h5.fontSize',
                  },
                }}
              >
                {unite.includes('imperial') ? '°F' : '°C'}
              </Typography>
              <Box
                sx={{
                  width: '120px',
                  height: '120px',
                }}
              >
                <div>
                  <GetWeatherIcon icon={weatherData.weather[0].icon} />
                </div>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              position: 'absolute',
              right: '20px',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: '500',
                textAlign: 'center',
              }}
            >
              {weatherData.weather[0].description}
            </Typography>
          </Box>

          <Box>
            {open && (
              <Box>
                <WeatherDetailsDialog
                  weatherData={weatherData}
                  open={open}
                  handleClose={handleClose}
                />
              </Box>
            )}
          </Box>
        </Box>
      );

    return <div></div>;
  }
);
