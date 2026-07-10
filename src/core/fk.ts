import * as THREE from "three";
import { ROBOT_CHAIN } from "./chain";

export interface FKResult {
  position: THREE.Vector3;
  rotation: THREE.Euler;
  matrix: THREE.Matrix4;
}

function dhMatrix(
  theta: number,
  d: number,
  a: number,
  alpha: number
): THREE.Matrix4 {
  const ct = Math.cos(theta);
  const st = Math.sin(theta);

  const ca = Math.cos(alpha);
  const sa = Math.sin(alpha);

  return new THREE.Matrix4().set(
    ct,
    -st * ca,
    st * sa,
    a * ct,

    st,
    ct * ca,
    -ct * sa,
    a * st,

    0,
    sa,
    ca,
    d,

    0,
    0,
    0,
    1
  );
}

export function forwardKinematics(
  jointAngles: number[]
): FKResult {
  const transform = new THREE.Matrix4().identity();

  ROBOT_CHAIN.forEach((joint, index) => {
    const theta =
      (jointAngles[index] ?? 0) + joint.thetaOffset;

    transform.multiply(
      dhMatrix(
        theta,
        joint.d,
        joint.a,
        joint.alpha
      )
    );
  });

  const position = new THREE.Vector3();
  const quaternion = new THREE.Quaternion();
  const scale = new THREE.Vector3();

  transform.decompose(
    position,
    quaternion,
    scale
  );

  const rotation = new THREE.Euler();

  rotation.setFromQuaternion(quaternion);

  return {
    position,
    rotation,
    matrix: transform,
  };
}