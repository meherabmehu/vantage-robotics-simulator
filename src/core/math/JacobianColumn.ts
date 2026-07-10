import * as THREE from "three";
import FiniteDifference from "./FiniteDifference";

export interface JacobianColumnResult {
  linear: THREE.Vector3;
  angular: THREE.Vector3;
}

export default class JacobianColumn {
  public static compute(
    beforePosition: THREE.Vector3,
    afterPosition: THREE.Vector3,
    beforeRotation: THREE.Euler,
    afterRotation: THREE.Euler
  ): JacobianColumnResult {
    return {
      linear: FiniteDifference.derivative(
        beforePosition,
        afterPosition
      ),

      angular: FiniteDifference.angularDerivative(
        beforeRotation,
        afterRotation
      ),
    };
  }

  public static toArray(
    column: JacobianColumnResult
  ): number[] {
    return [
      column.linear.x,
      column.linear.y,
      column.linear.z,

      column.angular.x,
      column.angular.y,
      column.angular.z,
    ];
  }
}