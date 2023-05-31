import { create } from 'zustand';

type State = {
  unite: string;
  setUnite: (state: string) => void;
};

export const useWeatherSettingsUnite = create<State>((set) => ({
  unite: 'metric',
  setUnite: (unite: string) => set((state) => ({ ...state, unite })),
}));
