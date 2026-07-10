import type { MotionCommand } from "./MotionCommand";

export type ExecutorCallbacks = {
  onHome?: () => void;
  onJoint?: (joint: number, value: number) => void;
  onGoto?: (x: number, y: number, z: number) => void;
  onStop?: () => void;
};

export default class CommandExecutor {
  private callbacks: ExecutorCallbacks;

  constructor(callbacks: ExecutorCallbacks) {
    this.callbacks = callbacks;
  }

  execute(cmd: MotionCommand) {
    switch (cmd.type) {
      case "home":
        this.callbacks.onHome?.();
        break;

      case "joint":
        this.callbacks.onJoint?.(cmd.joint, cmd.value);
        break;

      case "goto":
        this.callbacks.onGoto?.(cmd.x, cmd.y, cmd.z);
        break;

      case "stop":
        this.callbacks.onStop?.();
        break;
    }
  }
}