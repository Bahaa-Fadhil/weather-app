import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { memo } from 'react';
import {
  useWeatherSettingElement,
  useWeatherSettingsLanguage,
  useWeatherSettingsUnite,
} from 'src/store';
import {
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Tooltip,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

/**
 * Represents a weather settings menu that allows the user to select their
 * preferred language and unit for displaying weather information.
 */
export const WeatherSettings = memo(() => {
  // Retrieve the weatherSettingElement state and setter from a custom hook
  const weatherSettingElement = useWeatherSettingElement(
    (state) => state.weatherSettingElement
  );
  const setWeatherSettingElement = useWeatherSettingElement(
    (state) => state.setWeatherSettingElement
  );
  const open = Boolean(weatherSettingElement);
  // TODO: Store setting on local storage.
  // Retrieve the language state and setter from a custom hook.
  const { language, setLanguage } = useWeatherSettingsLanguage(
    (state) => state
  );
  // Retrieve the unit state and setter from a custom hook.
  const { unite, setUnite } = useWeatherSettingsUnite((state) => state);

  return (
    <Box>
      <Menu
        anchorEl={weatherSettingElement}
        id="account-menu"
        open={open}
        onClose={() => setWeatherSettingElement(null)}
        onClick={undefined}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            backgroundColor: 'rgb(25 118 210 / 70%)',
            border: '2px solid rgba(0 0 0 / 50%)',
            color: 'white',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 10,
              width: 10,
              height: 10,
              bgcolor: 'rgb(25 118 210 / 50%)',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <FormControl>
            <FormLabel id="controlled-langauges-group" sx={{ color: '#FFF' }}>
              Languages
            </FormLabel>
            <RadioGroup
              defaultValue="en"
              value={language}
              name="radio-buttons-group"
              sx={{ color: '#FFF' }}
            >
              <FormControlLabel
                value="en"
                onClick={() => setLanguage('en')}
                control={
                  <Radio
                    sx={{
                      color: '#FFF',
                      '&.Mui-checked': {
                        color: '#FFF',
                      },
                    }}
                  />
                }
                label="English"
              />
              <FormControlLabel
                value="no"
                onClick={() => setLanguage('no')}
                control={
                  <Radio
                    sx={{
                      color: '#FFF',
                      '&.Mui-checked': {
                        color: '#FFF',
                      },
                    }}
                  />
                }
                label="Norwegian"
              />
            </RadioGroup>
          </FormControl>
        </MenuItem>
        <Divider sx={{ padding: '2px' }} light />
        <MenuItem>
          <FormControl>
            <FormLabel id="controlled-units-group" sx={{ color: '#FFF' }}>
              Units
            </FormLabel>
            <RadioGroup
              defaultValue="metric"
              name="radio-buttons-group"
              sx={{ color: '#FFF' }}
            >
              <FormControlLabel
                defaultValue="metric"
                value={unite}
                onClick={() => setUnite('metric')}
                control={
                  <Radio
                    sx={{
                      color: '#FFF',
                      '&.Mui-checked': {
                        color: '#FFF',
                      },
                    }}
                  />
                }
                label="Celsius"
              />
              <FormControlLabel
                value="Fahrenheit"
                onClick={() => setUnite('imperial')}
                control={
                  <Radio
                    sx={{
                      color: '#FFF',
                      '&.Mui-checked': {
                        color: '#FFF',
                      },
                    }}
                  />
                }
                label="Fahrenheit"
              />
            </RadioGroup>
          </FormControl>
        </MenuItem>
        <Tooltip title="This feature is coming soon">
          <MenuItem disabled>
            <TextField
              id="filled-search"
              label="Add city"
              type="search"
              variant="filled"
              size="small"
              sx={{
                color: '#000',
                background: 'white',
                padding: 0,
                borderRadius: '5px',
              }}
            />
            <AddIcon />
          </MenuItem>
        </Tooltip>
      </Menu>
    </Box>
  );
});
