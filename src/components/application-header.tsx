import * as React from 'react';
import { AppBar, Box, Divider, Tooltip, Typography } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import { useWeatherSettingElement } from 'src/store';
import { memo } from 'react';
import { WeatherSettings } from './weather-settings';

export const ApplicationHeader = memo((): JSX.Element => {
  const weatherSettingElement = useWeatherSettingElement(
    (state) => state.weatherSettingElement
  );
  const setWeatherSettingElement = useWeatherSettingElement(
    (state) => state.setWeatherSettingElement
  );

  const open = Boolean(weatherSettingElement);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setWeatherSettingElement(event.currentTarget);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        zIndex: 1,
        maxHeight: 'fit-content',
        minHeight: '65px',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <Box>
        <Toolbar>
          <Typography
            sx={{
              fontSize: {
                xs: 'subtitle2.fontSize',
                sm: 'h5.fontSize',
                md: 'h5.fontSize',
              },
              fontWeight: '500',
              width: '100%',
              textAlign: 'center',
              align: 'center',
              flexDirection: 'column',
              display: 'flex',
              paddingLeft: '5px',
            }}
          >
            {'Dashboard'}
          </Typography>
          <Box
            sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}
          >
            <Tooltip title="Weather settings">
              <IconButton
                onClick={handleClick}
                edge="end"
                color="inherit"
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <SettingsIcon />
              </IconButton>
            </Tooltip>
          </Box>
          <Box>{weatherSettingElement && <WeatherSettings />}</Box>
        </Toolbar>
        <Divider />
      </Box>
    </AppBar>
  );
});
