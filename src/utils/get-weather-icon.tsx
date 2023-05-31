import { memo } from 'react';

type Props = Readonly<{
  icon: string;
}>;

/**
 * Get the weather icon appropriate icon based on the
 * provided icon code from the OpenWeatherMap API.
 */
export const GetWeatherIcon = memo(({ icon }: Props) => {
  let iconElement;

  switch (icon) {
    case '01d':
      iconElement = (
        <img
          src="./assets/openweathermap/01d.svg"
          alt="01d-sun-clear-sky-day-icon"
        />
      );
      break;
    case '02d':
      iconElement = (
        <img
          src="./assets/openweathermap/02d.svg"
          alt="02d-few-clouds-day-icon"
        />
      );
      break;
    case '03d':
      iconElement = (
        <img
          src="./assets/openweathermap/03d.svg"
          alt="03d-scattered-clouds-day-icon"
        />
      );
      break;
    case '04d':
      iconElement = (
        <img
          src="./assets/openweathermap/04d.svg"
          alt="04d-broken-clouds-day-icon"
        />
      );
      break;
    case '09d':
      iconElement = (
        <img
          src="./assets/openweathermap/09d.svg"
          alt="09d-shower-rain-day-icon"
        />
      );
      break;
    case '10d':
      iconElement = (
        <img
          src="./assets/openweathermap/10d.svg"
          alt="10d-sun-and-rain-day-icon"
        />
      );
      break;
    case '11d':
      iconElement = (
        <img
          src="./assets/openweathermap/11d.svg"
          alt="11d-thunderstorm-day-icon"
        />
      );
      break;
    case '13d':
      iconElement = (
        <img src="./assets/openweathermap/13d.svg" alt="13d-snow-day-icon" />
      );
      break;
    case '50d':
      iconElement = (
        <img src="./assets/openweathermap/50d.svg" alt="50d-mist-day-icon" />
      );
      break;
    case '01n':
      iconElement = (
        <img
          src="./assets/openweathermap/01n.svg"
          alt="01n-moon-clear-sky-night-icon"
        />
      );
      break;
    case '02n':
      iconElement = (
        <img
          src="./assets/openweathermap/02n.svg"
          alt="02n-partly-cloudy-night-icon"
        />
      );
      break;
    case '03n':
      iconElement = (
        <img
          src="./assets/openweathermap/03n.svg"
          alt="03n-cloudy-night-icon"
        />
      );
      break;
    case '04n':
      iconElement = (
        <img
          src="./assets/openweathermap/04n.svg"
          alt="04n-cloudy-night-icon"
        />
      );
      break;
    case '09n':
      iconElement = (
        <img
          src="./assets/openweathermap/09n.svg"
          alt="09n-heavy-showers-night-icon"
        />
      );
      break;
    case '10n':
      iconElement = (
        <img
          src="./assets/openweathermap/10n.svg"
          alt="10n-moon-and-rain-night-icon"
        />
      );
      break;
    case '11n':
      iconElement = (
        <img
          src="./assets/openweathermap/11n.svg"
          alt="11n-thunderstorm-night-icon"
        />
      );
      break;
    case '13n':
      iconElement = (
        <img src="./assets/openweathermap/13n.svg" alt="13n-snow-night-icon" />
      );
      break;
    case '50n':
      iconElement = (
        <img src="./assets/openweathermap/50n.svg" alt="50n-mist-night-icon" />
      );
      break;
    default:
      iconElement = (
        <img src="./assets/icons/not-available.svg" alt="not-available-icon" />
      );
      break;
  }

  return <div>{iconElement}</div>;
});
