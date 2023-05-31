import { create } from 'zustand';

type State = {
  language: string;
  setLanguage: (state: string) => void;
};

export const useWeatherSettingsLanguage = create<State>((set) => ({
  language: 'en',
  setLanguage: (language: string) => set((state) => ({ ...state, language })),
}));
