export interface JointLimit {
  min: number;
  max: number;
}

export default class IKModel {
  public readonly jointNames = [
    "joint_1",
    "joint_2",
    "joint_3",
    "joint_4",
    "joint_5",
    "joint_6",
    "stylus_pitch",
  ];

  public readonly tcpFrame = "stylus_tip";

  public readonly activeJointCount = 7;

  public readonly jointLimits: JointLimit[] = [
    { min: -Math.PI, max: Math.PI },
    { min: -Math.PI, max: Math.PI },
    { min: -Math.PI, max: Math.PI },
    { min: -Math.PI, max: Math.PI },
    { min: -Math.PI, max: Math.PI },
    { min: -Math.PI, max: Math.PI },
    { min: -Math.PI / 2, max: Math.PI / 2 },
  ];

  public clamp(joints: number[]): number[] {
    return joints.map((value, index) => {
      const limit = this.jointLimits[index];

      return Math.min(
        limit.max,
        Math.max(limit.min, value)
      );
    });
  }
}