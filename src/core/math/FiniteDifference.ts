import * as THREE from "three";

export default class FiniteDifference {
  public static readonly EPSILON = 1e-5;

  public static derivative(
    before: THREE.Vector3,
    after: THREE.Vector3,
    delta = FiniteDifference.EPSILON
  ): THREE.Vector3 {
    return new THREE.Vector3(
      (after.x - before.x) / delta,
      (after.y - before.y) / delta,
      (after.z - before.z) / delta
    );
  }

  public static angularDerivative(
    before: THREE.Euler,
    after: THREE.Euler,
    delta = FiniteDifference.EPSILON
  ): THREE.Vector3 {
    return new THREE.Vector3(
      (after.x - before.x) / delta,
      (after.y - before.y) / delta,
      (after.z - before.z) / delta
    );
  }
}