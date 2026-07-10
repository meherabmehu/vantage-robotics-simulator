import * as THREE from "three";

export interface IKResult {
  success: boolean;
  joints: number[];
}

export default class IKSolver {
  public solve(
    currentJoints: number[],
    _targetPosition: THREE.Vector3,
    _targetRotation: THREE.Euler
  ): IKResult {
    return {
      success: false,
      joints: [...currentJoints],
    };
  }
}