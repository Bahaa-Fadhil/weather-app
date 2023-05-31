import { memo } from 'react';
import { Weather } from 'src/interfaces';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { GetWeatherIcon, calculateTimestampFromUnix } from 'src/utils';
import { useWeatherSettingsUnite } from 'src/store';

type Props = Readonly<{
  weatherData: Weather;
}>;

export const CityWeatherDetails = memo(({ weatherData }: Props) => {
  // Retrieve the unit state from a custom hook.
  const { unite } = useWeatherSettingsUnite((state) => state);

  return (
    <Grid
      container
      spacing={2}
      sx={{
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}
    >
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box
          sx={{
            width: '300px',
            margin: '60px auto 0',
            display: 'block',
            borderRadius: '6px',
            backgroundColor: 'rgb(0 0 0 / 30%)',
            border: '2px solid rgba(0 0 0 / 30%)',
            boxShadow: '2px 2px 4px rgba(0 0 0 / 30%)',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: '500',
                textAlign: 'center',
                margin: '10px',
              }}
            >
              {weatherData.main.temp.toFixed(0)}
              {unite.includes('imperial') ? '°F' : '°C'}
            </Typography>
            <Box
              sx={{
                display: 'block',
                width: '160px',
                height: '160px',
              }}
            >
              <Box
                sx={{
                  padding: 0,
                  margin: '-13px',
                  marginBottom: '-30px',
                }}
              >
                <GetWeatherIcon icon={weatherData.weather[0].icon} />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'end',
              position: 'relative',
              top: '-25px',
              right: '25px',
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: '500' }}>
              {weatherData.weather[0].description}
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '-10px',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: '500',
                textAlign: 'center',
                margin: 'auto',
              }}
            >
              Max: {Math.round(weatherData.main.temp_max)}°C
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: '500',
                textAlign: 'center',
                margin: 'auto',
              }}
            >
              Min: {Math.round(weatherData.main.temp_min)}°C
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <Box>
              <Box
                sx={{
                  display: 'block',
                  width: '160px',
                  height: '160px',
                  backgroundColor: 'rgb(0 0 0 / 30%)',
                  border: '2px solid rgba(0 0 0 / 30%)',
                  boxShadow: '2px 2px 4px rgba(0 0 0 / 30%)',
                  borderRadius: '8px',
                  margin: '8px',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={`./../assets/icons/sunrise.svg`}
                    alt="sunrise-icon"
                    width={100}
                    height={100}
                    style={{ padding: 0, margin: '-15px' }}
                  />
                </Box>

                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: '500',
                    textAlign: 'center',
                  }}
                >
                  {calculateTimestampFromUnix(weatherData.sys.sunrise)}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: '500',
                    textAlign: 'center',
                  }}
                >
                  Sunrise
                </Typography>
              </Box>

              <Box
                sx={{
                  display: 'block',
                  width: '160px',
                  height: '160px',
                  backgroundColor: 'rgb(0 0 0 / 30%)',
                  border: '2px solid rgba(0 0 0 / 30%)',
                  boxShadow: '2px 2px 4px rgba(0 0 0 / 30%)',
                  borderRadius: '8px',
                  margin: '8px',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={`./../assets/icons/humidity.svg`}
                    alt="sunrise-icon"
                    width={100}
                    height={100}
                    style={{ padding: 0, margin: '-15px' }}
                  />
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: '500',
                    textAlign: 'center',
                  }}
                >
                  {weatherData.main.humidity} %
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: '500',
                    textAlign: 'center',
                  }}
                >
                  humidity
                </Typography>
              </Box>

              <Box
                sx={{
                  display: 'block',
                  width: '160px',
                  height: '160px',
                  backgroundColor: 'rgb(0 0 0 / 30%)',
                  border: '2px solid rgba(0 0 0 / 30%)',
                  boxShadow: '2px 2px 4px rgba(0 0 0 / 30%)',
                  borderRadius: '8px',
                  margin: '8px',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={`./../assets/icons/wind.svg`}
                    alt="wind-icon"
                    width={100}
                    height={100}
                    style={{ padding: 0, margin: '-15px' }}
                  />
                </Box>

                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: '500',
                    textAlign: 'center',
                  }}
                >
                  {weatherData.wind.speed} m/s
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: '500',
                    textAlign: 'center',
                  }}
                >
                  wind
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <Box>
              <Box
                sx={{
                  display: 'block',
                  width: '160px',
                  height: '160px',
                  backgroundColor: 'rgb(0 0 0 / 30%)',
                  border: '2px solid rgba(0 0 0 / 30%)',
                  boxShadow: '2px 2px 4px rgba(0 0 0 / 30%)',
                  borderRadius: '8px',
                  margin: '8px',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={`./../assets/icons/sunset.svg`}
                    alt="sunrise-icon"
                    width={100}
                    height={100}
                    style={{ padding: 0, margin: '-15px' }}
                  />
                </Box>

                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: '500',
                    textAlign: 'center',
                  }}
                >
                  {calculateTimestampFromUnix(weatherData.sys.sunset)}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: '500',
                    textAlign: 'center',
                  }}
                >
                  Sunset
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'block',
                  width: '160px',
                  height: '160px',
                  backgroundColor: 'rgb(0 0 0 / 30%)',
                  border: '2px solid rgba(0 0 0 / 30%)',
                  boxShadow: '2px 2px 4px rgba(0 0 0 / 30%)',
                  borderRadius: '8px',
                  margin: '8px',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <VisibilityOffIcon
                    sx={{
                      width: '60px',
                      height: '60px',
                      margin: '5px',
                    }}
                  />
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: '500',
                    textAlign: 'center',
                  }}
                >
                  {(weatherData.visibility / 1000).toFixed(1)} Km
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: '500',
                    textAlign: 'center',
                  }}
                >
                  Visibility
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'block',
                  width: '160px',
                  height: '160px',
                  backgroundColor: 'rgb(0 0 0 / 30%)',
                  border: '2px solid rgba(0 0 0 / 30%)',
                  boxShadow: '2px 2px 4px rgba(0 0 0 / 30%)',
                  borderRadius: '8px',
                  margin: '8px',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={`./../assets/icons/cloudy.svg`}
                    alt="cloudy-icon"
                    width={100}
                    height={100}
                    style={{ padding: 0, margin: '-15px' }}
                  />
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: '500',
                    textAlign: 'center',
                  }}
                >
                  {weatherData.clouds.all} %
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: '500',
                    textAlign: 'center',
                  }}
                >
                  Cloudiness
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
});
