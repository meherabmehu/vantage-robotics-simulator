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
    });

    this.line = new THREE.Line(
      this.geometry,
      this.material
    );
  }

  public addTo(scene: THREE.Scene) {
    scene.add(this.line);
  }

  public addPoint(position: THREE.Vector3) {
    this.points.push(position.clone());

    this.geometry.setFromPoints(this.points);
  }

  public clear() {
    this.points = [];

    this.geometry.setFromPoints([]);
  }

  public dispose() {
    this.geometry.dispose();

    this.material.dispose();
  }
}