import type { MotionCommand } from "./MotionCommand";

export default class CommandValidator {
  static validate(cmd: MotionCommand): boolean {
    switch (cmd.type) {
      case "joint":
        return cmd.joint >= 0 && cmd.joint < 7;

      case "goto":
        return (
          Number.isFinite(cmd.x) &&
          Number.isFinite(cmd.y) &&
          Number.isFinite(cmd.z)
        );

      default:
        return true;
    }
  }
}