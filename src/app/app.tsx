import { ApplicationHeader, WeatherDashboard } from 'src/components';
import styles from './app.module.css';

export function App() {
  return (
    <div className={styles['app']}>
      <ApplicationHeader />
      <WeatherDashboard />
    </div>
  );
}

export default App;
