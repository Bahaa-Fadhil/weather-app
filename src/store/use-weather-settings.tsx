import { create } from 'zustand';

type State = {
  weatherSettingElement: null | HTMLElement;
  setWeatherSettingElement: (settings: null | HTMLElement) => void;
};
export const useWeatherSettingElement = create<State>((set) => ({
  weatherSettingElement: null,
  setWeatherSettingElement: (weatherSettingElement: null | HTMLElement) =>
    set((state) => ({ ...state, weatherSettingElement })),
}));
