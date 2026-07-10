import * as THREE from "three";
import RobotLoader from "./RobotLoader";
import { forwardKinematics } from "../core/fk";
import { useRobotStore } from "../state/robotStore";

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

  public getTCPFrame(): THREE.Object3D | null {
    if (!this.robot) return null;

    return (
      this.robot.links?.["stylus_tip"] ??
      this.robot.frames?.["stylus_tip"] ??
      null
    );
  }

  // ==========================
  // NEW
  // ==========================

  public getTCPPosition(): THREE.Vector3 {
    const tcp = this.getTCPFrame();

    if (!tcp) {
      return new THREE.Vector3();
    }

    const position = new THREE.Vector3();

    tcp.updateWorldMatrix(true, false);

    tcp.getWorldPosition(position);

    return position;
  }

  public getTCPRotation(): THREE.Euler {
    const tcp = this.getTCPFrame();

    if (!tcp) {
      return new THREE.Euler();
    }

    const quaternion = new THREE.Quaternion();

    tcp.updateWorldMatrix(true, false);

    tcp.getWorldQuaternion(quaternion);

    return new THREE.Euler().setFromQuaternion(
      quaternion
    );
  }

  // ==========================

  public setJoint(index: number, angle: number) {
    if (!this.robot) return;

    const jointName = JOINT_NAMES[index];

    const joint = this.robot.joints[jointName];

    if (!joint) return;

    // Move Robot
    this.robot.setJointValue(jointName, angle);

    // Read latest joint state
    const joints = [...useRobotStore.getState().joints];
    joints[index] = angle;

    // FK
    const tcp = forwardKinematics(joints);

    // Save TCP
    useRobotStore
      .getState()
      .setTCP(tcp.position, tcp.rotation);

    this.robot.updateMatrixWorld(true);
  }

  public home() {
    if (!this.robot) return;

    JOINT_NAMES.forEach((name) => {
      this.robot.setJointValue(name, 0);
    });

    const tcp = forwardKinematics([
      0, 0, 0, 0, 0, 0, 0,
    ]);

    useRobotStore
      .getState()
      .setAllJoints([0, 0, 0, 0, 0, 0, 0]);

    useRobotStore
      .getState()
      .setTCP(tcp.position, tcp.rotation);

    this.robot.updateMatrixWorld(true);
  }
}