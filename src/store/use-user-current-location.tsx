import { create } from 'zustand';

type State = {
  currentLocation: string;
  setCurrentLocation: (state: string) => void;
};

export const useUserCurrentLocation = create<State>((set) => ({
  currentLocation: '',
  setCurrentLocation: (currentLocation: string) =>
    set((state) => ({ ...state, currentLocation })),
}));
