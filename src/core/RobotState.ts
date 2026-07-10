export interface RobotState {
  joints: number[];
}

export const createRobotState = (): RobotState => ({
  joints: [0, 0, 0, 0, 0, 0, 0],
});