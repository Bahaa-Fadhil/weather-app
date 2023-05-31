import Dialog from '@mui/material/Dialog';
import { Box } from '@mui/material';
import { Weather } from 'src/interfaces';
import { Transition } from './transition-dialog-slide';
import { WeatherDetailHeader } from './weather-details-header';
import { CityWeatherDetails } from './city-weather-details';

type Props = Readonly<{
  weatherData: Weather;
  open: boolean;
  handleClose: () => void;
}>;

/**
 * Renders a dialog box displaying weather details based on
 * the provided weatherData. The dialog is shown or hidden
 * based on the open prop, and it can be closed using the
 * handleClose function.
 */
export default function WeatherDetailsDialog({
  weatherData,
  open,
  handleClose,
}: Props) {
  return (
    <Box>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <WeatherDetailHeader
          handleClose={handleClose}
          weatherData={weatherData}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '80vh',
            color: '#FFFFFF',
            marginTop: '60px',
          }}
        >
          <CityWeatherDetails weatherData={weatherData} />
        </Box>
      </Dialog>
    </Box>
  );
}
