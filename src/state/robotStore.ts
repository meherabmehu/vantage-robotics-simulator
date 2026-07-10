import { create } from "zustand";

interface RobotState {
  joints: number[];

  setJoint: (index: number, value: number) => void;

  setAllJoints: (values: number[]) => void;
}

export const useRobotStore = create<RobotState>((set) => ({
  joints: [0, 0, 0, 0, 0, 0, 0],

  setJoint: (index, value) =>
    set((state) => {
      const next = [...state.joints];
      next[index] = value;

      return {
        joints: next,
      };
    }),

  setAllJoints: (values) =>
    set({
      joints: values,
    }),
}));