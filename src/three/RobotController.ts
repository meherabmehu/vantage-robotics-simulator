import * as THREE from "three";
import RobotLoader from "./RobotLoader";

const JOINT_NAMES = [
  "joint_1",
  "joint_2",
  "joint_3",
  "joint_4",
  "joint_5",
  "joint_6",
  "stylus_pitch",
];

export default class RobotController {
  private robot: any = null;

  public async load(): Promise<THREE.Object3D> {
    const loader = new RobotLoader();

    this.robot = await loader.load();
    return this.robot;
  }

  public getJointCount() {
    return JOINT_NAMES.length;
  }

  public setJoint(index: number, angle: number) {
    if (!this.robot) return;

    const jointName = JOINT_NAMES[index];

    const joint = this.robot.joints[jointName];

    if (!joint) {
      console.error("Joint not found:", jointName);
      return;
    }

    // IMPORTANT
    this.robot.setJointValue(jointName, angle);

    this.robot.updateMatrixWorld(true);
  }

  public home() {
    if (!this.robot) return;

    JOINT_NAMES.forEach((name) => {
      this.robot.setJointValue(name, 0);
    });

    this.robot.updateMatrixWorld(true);
  }
}