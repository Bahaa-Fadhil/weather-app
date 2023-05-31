import { Weather } from 'src/interfaces';
import { create } from 'zustand';

type State = {
  cityWeather: Weather;
  setCityWeather: (state: Weather) => void;
};

export const useCityWeather = create<State>((set) => ({
  cityWeather: {} as Weather,
  setCityWeather: (cityWeather: Weather) =>
    set((state) => ({ ...state, cityWeather })),
}));
