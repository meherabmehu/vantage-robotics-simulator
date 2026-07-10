import * as THREE from "three";

export default class TCPGizmo {
  private axes: THREE.AxesHelper;

  constructor(size = 0.08) {
    this.axes = new THREE.AxesHelper(size);
  }

  public addTo(parent: THREE.Object3D) {
    parent.add(this.axes);
  }

  public update(matrix: THREE.Matrix4) {
    matrix.decompose(
      this.axes.position,
      this.axes.quaternion,
      new THREE.Vector3()
    );
  }

  public get object() {
    return this.axes;
  }
}