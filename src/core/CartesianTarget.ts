import * as THREE from "three";

export default class CartesianTarget {
  private static position = new THREE.Vector3();

  private static rotation = new THREE.Euler();

  public static getPosition() {
    return this.position.clone();
  }

  public static getRotation() {
    return this.rotation.clone();
  }

  public static setPosition(position: THREE.Vector3) {
    this.position.copy(position);
  }

  public static setRotation(rotation: THREE.Euler) {
    this.rotation.copy(rotation);
  }

  public static reset() {
    this.position.set(0, 0, 0);

    this.rotation.set(0, 0, 0);
  }

  public static moveX(delta: number) {
    this.position.x += delta;
  }

  public static moveY(delta: number) {
    this.position.y += delta;
  }

  public static moveZ(delta: number) {
    this.position.z += delta;
  }

  public static rotateX(delta: number) {
    this.rotation.x += delta;
  }

  public static rotateY(delta: number) {
    this.rotation.y += delta;
  }

  public static rotateZ(delta: number) {
    this.rotation.z += delta;
  }
}