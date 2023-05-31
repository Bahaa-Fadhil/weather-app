import { memo } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Weather } from 'src/interfaces';

type Props = Readonly<{
  weatherData: Weather;
  handleClose: () => void;
}>;

export const WeatherDetailHeader = memo(
  ({ weatherData, handleClose }: Props) => {
    return (
      <AppBar
        sx={{
          position: 'fixed',
          minHeight: '65px',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography
            variant="h5"
            sx={{
              fontWeight: '500',
              width: '100%',
              textAlign: 'center',
              align: 'center',
              flexDirection: 'column',
              display: 'flex',
              paddingLeft: '5px',
            }}
          >
            {weatherData.name}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
);
