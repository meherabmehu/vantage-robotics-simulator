import * as THREE from "three";

export default class TargetGizmo {
  public object: THREE.Group;

  constructor(size = 0.12) {
    this.object = new THREE.Group();

    const axes = new THREE.AxesHelper(size);

    this.object.add(axes);

    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(size * 0.18, 16, 16),
      new THREE.MeshBasicMaterial({
        color: 0xffcc00,
      })
    );

    this.object.add(sphere);
  }

  public setPosition(position: THREE.Vector3) {
    this.object.position.copy(position);
  }

  public setRotation(rotation: THREE.Euler) {
    this.object.rotation.copy(rotation);
  }
}