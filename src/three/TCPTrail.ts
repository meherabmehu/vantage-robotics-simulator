import * as THREE from "three";

export default class TCPTrail {
  private points: THREE.Vector3[] = [];

  private geometry: THREE.BufferGeometry;
  private material: THREE.LineBasicMaterial;
  private line: THREE.Line;

  constructor() {
    this.geometry = new THREE.BufferGeometry();

    this.material = new THREE.LineBasicMaterial({
      color: 0x00ffff,
      linewidth: 2,
    });

    this.line = new THREE.Line(this.geometry, this.material);

    // প্রথম point না থাকলে line render হয় না
    this.geometry.setFromPoints([
      new THREE.Vector3(),
      new THREE.Vector3(),
    ]);
  }

  public addTo(scene: THREE.Scene) {
    scene.add(this.line);
  }

  public addPoint(position: THREE.Vector3) {
    // খুব কাছাকাছি point হলে add করো না
    const last = this.points[this.points.length - 1];

    if (last && last.distanceTo(position) < 0.002) {
      return;
    }

    this.points.push(position.clone());

    if (this.points.length < 2) return;

    this.geometry.dispose();
    this.geometry = new THREE.BufferGeometry().setFromPoints(this.points);

    this.line.geometry = this.geometry;
  }

  public clear() {
    this.points = [];

    this.geometry.dispose();

    this.geometry = new THREE.BufferGeometry();

    this.line.geometry = this.geometry;
  }

  public dispose() {
    this.geometry.dispose();
    this.material.dispose();
  }
}