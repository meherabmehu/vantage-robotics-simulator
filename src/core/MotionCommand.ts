export type MotionSource =
  | "keyboard"
  | "dashboard"
  | "joystick"
  | "voice"
  | "agent"
  | "auto";

export type MotionCommand =
  | {
      type: "home";
      source: MotionSource;
    }
  | {
      type: "joint";
      joint: number;
      value: number;
      source: MotionSource;
    }
  | {
      type: "goto";
      x: number;
      y: number;
      z: number;
      source: MotionSource;
    }
  | {
      type: "stop";
      source: MotionSource;
    };