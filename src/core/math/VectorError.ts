import * as THREE from "three";

export default class VectorError {
  public static position(
    current: THREE.Vector3,
    target: THREE.Vector3
  ) {
    return target.clone().sub(current);
  }

  public static rotation(
    current: THREE.Euler,
    target: THREE.Euler
  ) {
    return new THREE.Vector3(
      target.x - current.x,
      target.y - current.y,
      target.z - current.z
    );
  }

  public static norm(v: THREE.Vector3) {
    return Math.sqrt(
      v.x * v.x +
      v.y * v.y +
      v.z * v.z
    );
  }
}