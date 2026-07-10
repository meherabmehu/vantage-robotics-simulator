import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default class CameraController {
  private camera: THREE.PerspectiveCamera;
  private controls: OrbitControls;

  constructor(
    camera: THREE.PerspectiveCamera,
    controls: OrbitControls
  ) {
    this.camera = camera;
    this.controls = controls;
  }

  private move(
    x: number,
    y: number,
    z: number
  ) {
    this.camera.position.set(x, y, z);

    this.controls.target.set(0, 0.5, 0);

    this.controls.update();
  }

  public front() {
    this.move(2.2, 1.3, 0);
  }

  public back() {
    this.move(-2.2, 1.3, 0);
  }

  public left() {
    this.move(0, 1.3, 2.2);
  }

  public right() {
    this.move(0, 1.3, -2.2);
  }

  public top() {
    this.move(0, 3.0, 0.001);
  }

  public iso() {
    this.move(1.8, 1.5, 1.8);
  }
}