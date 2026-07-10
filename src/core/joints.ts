import * as THREE from "three";

export interface RobotJoint {
  name: string;
  joint: any;
}

const JOINT_ORDER = [
  "joint_1",
  "joint_2",
  "joint_3",
  "joint_4",
  "joint_5",
  "joint_6",
  "stylus_pitch",
];

export function discoverJoints(robot: THREE.Object3D): RobotJoint[] {
  const joints: RobotJoint[] = [];

  robot.traverse((child: any) => {
    if (!child.isURDFJoint) return;

    if (child.jointType !== "revolute") return;

    joints.push({
      name: child.name,
      joint: child,
    });
  });

  joints.sort(
    (a, b) =>
      JOINT_ORDER.indexOf(a.name) -
      JOINT_ORDER.indexOf(b.name)
  );

  return joints;
}