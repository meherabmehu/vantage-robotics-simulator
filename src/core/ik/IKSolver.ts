import * as THREE from "three";
import IKModel from "./IKModel";

export interface IKResult {
  success: boolean;
  joints: number[];
}

export default class IKSolver {
  private model: IKModel;

  constructor() {
    this.model = new IKModel();
  }

  public solve(
    currentJoints: number[],
    _targetPosition: THREE.Vector3,
    _targetRotation: THREE.Euler
  ): IKResult {
    const joints = this.model.clamp([
      ...currentJoints,
    ]);

    return {
      success: false,
      joints,
    };
  }
}