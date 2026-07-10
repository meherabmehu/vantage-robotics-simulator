import { create } from "zustand";

export type RobotMode =
  | "MANUAL"
  | "AUTONOMOUS"
  | "VOICE"
  | "AGENT";

export type InputDevice =
  | "Keyboard"
  | "Joystick"
  | "Dashboard"
  | "Voice"
  | "Agent";

interface ModeState {
  mode: RobotMode;
  input: InputDevice;

  setMode: (mode: RobotMode) => void;
  setInput: (input: InputDevice) => void;
}

export const useModeStore =
  create<ModeState>((set) => ({
    mode: "MANUAL",
    input: "Keyboard",

    setMode: (mode) =>
      set({
        mode,
      }),

    setInput: (input) =>
      set({
        input,
      }),
  }));