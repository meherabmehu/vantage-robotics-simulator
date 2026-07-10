import * as THREE from "three";
import IKModel from "./IKModel";
import VectorError from "../math/VectorError";

export interface IKResult {
  success: boolean;
  joints: number[];
  positionError: THREE.Vector3;
  rotationError: THREE.Vector3;
}

export default class IKSolver {
  private model: IKModel;

  constructor() {
    this.model = new IKModel();
  }

  public solve(
    currentJoints: number[],
    currentPosition: THREE.Vector3,
    currentRotation: THREE.Euler,
    targetPosition: THREE.Vector3,
    targetRotation: THREE.Euler
  ): IKResult {
    const joints = this.model.clamp([
      ...currentJoints,
    ]);

    const positionError = VectorError.position(
      currentPosition,
      targetPosition
    );

    const rotationError = VectorError.rotation(
      currentRotation,
      targetRotation
    );

    const success =
      VectorError.norm(positionError) < 1e-4;

    return {
      success,
      joints,
      positionError,
      rotationError,
    };
  }
}