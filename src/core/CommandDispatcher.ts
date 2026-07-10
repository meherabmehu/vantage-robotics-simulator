import type { MotionCommand } from "./MotionCommand";

import CommandExecutor from "./CommandExecutor";
import CommandValidator from "./CommandValidator";

export default class CommandDispatcher {
  private executor: CommandExecutor;

  constructor(executor: CommandExecutor) {
    this.executor = executor;
  }

  dispatch(cmd: MotionCommand) {
    if (!CommandValidator.validate(cmd)) {
      console.warn("Command rejected", cmd);
      return;
    }

    this.executor.execute(cmd);
  }
}