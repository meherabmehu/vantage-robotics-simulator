export interface DHParameter {
  name: string;
  a: number;
  alpha: number;
  d: number;
  thetaOffset: number;
}

export const ROBOT_CHAIN: DHParameter[] = [
  {
    name: "joint_1",
    a: 0,
    alpha: Math.PI / 2,
    d: 0.06,
    thetaOffset: 0,
  },
  {
    name: "joint_2",
    a: 0.18,
    alpha: 0,
    d: 0,
    thetaOffset: 0,
  },
  {
    name: "joint_3",
    a: 0.16,
    alpha: 0,
    d: 0,
    thetaOffset: 0,
  },
  {
    name: "joint_4",
    a: 0,
    alpha: Math.PI / 2,
    d: 0,
    thetaOffset: 0,
  },
  {
    name: "joint_5",
    a: 0,
    alpha: -Math.PI / 2,
    d: 0,
    thetaOffset: 0,
  },
  {
    name: "joint_6",
    a: 0,
    alpha: 0,
    d: 0.25,
    thetaOffset: 0,
  },
  {
    name: "stylus_pitch",
    a: 0,
    alpha: 0,
    d: 0.10,
    thetaOffset: 0,
  },
];