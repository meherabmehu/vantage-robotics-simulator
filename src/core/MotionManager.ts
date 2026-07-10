import { useRobotStore } from "../state/robotStore";

export default class MotionManager {
  public static moveJoint(
    index: number,
    delta: number
  ): number {
    const state = useRobotStore.getState();

    const joints = [...state.joints];

    joints[index] += delta;

    // Joint Limits
    joints[index] = Math.max(
      -Math.PI,
      Math.min(Math.PI, joints[index])
    );

    state.setJoint(index, joints[index]);

    return joints[index];
  }

  public static setJoint(
    index: number,
    value: number
  ): number {
    const state = useRobotStore.getState();

    const joints = [...state.joints];

    joints[index] = Math.max(
      -Math.PI,
      Math.min(Math.PI, value)
    );

    state.setJoint(index, joints[index]);

    return joints[index];
  }

  public static getJoint(
    index: number
  ) {
    return useRobotStore.getState().joints[index];
  }

  public static getAllJoints() {
    return [...useRobotStore.getState().joints];
  }

  public static home() {
    useRobotStore
      .getState()
      .resetRobot();
  }
}