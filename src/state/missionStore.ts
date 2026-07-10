import { create } from "zustand";

export type MissionState =
  | "Waiting"
  | "Planning"
  | "Executing"
  | "Completed"
  | "Failed";

interface MissionStore {
  progress: number;
  state: MissionState;

  setProgress: (value: number) => void;
  setState: (state: MissionState) => void;

  reset: () => void;
}

export const useMissionStore =
  create<MissionStore>((set) => ({
    progress: 0,

    state: "Waiting",

    setProgress: (value) =>
      set({
        progress: value,
      }),

    setState: (state) =>
      set({
        state,
      }),

    reset: () =>
      set({
        progress: 0,
        state: "Waiting",
      }),
  }));