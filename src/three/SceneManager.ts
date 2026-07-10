import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import RobotController from "./RobotController";
import TCPGizmo from "./TCPGizmo";

export default class SceneManager {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private controls: OrbitControls;

  private container: HTMLDivElement;
  private controller: RobotController;

  private zUpRoot: THREE.Group;
  private tcpGizmo: TCPGizmo;

  constructor(container: HTMLDivElement) {
    this.container = container;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x181c22);

    this.camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.01,
      100
    );

    this.camera.position.set(1.8, 1.5, 1.8);

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
    });

    this.renderer.setPixelRatio(window.devicePixelRatio);

    this.renderer.setSize(
      container.clientWidth,
      container.clientHeight
    );

    container.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(
      this.camera,
      this.renderer.domElement
    );

    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.08;
    this.controls.target.set(0, 0.5, 0);

    this.scene.add(new THREE.GridHelper(4, 40));
    this.scene.add(new THREE.AxesHelper(0.5));

    this.scene.add(new THREE.AmbientLight(0xffffff, 1.4));

    const light = new THREE.DirectionalLight(0xffffff, 2);
    light.position.set(2, 4, 3);
    this.scene.add(light);

    this.zUpRoot = new THREE.Group();
    this.zUpRoot.rotation.x = -Math.PI / 2;
    this.scene.add(this.zUpRoot);

    this.controller = new RobotController();

    this.tcpGizmo = new TCPGizmo(0.08);

    this.loadRobot();

    window.addEventListener("resize", this.onResize);

    this.animate();
  }

  private async loadRobot() {
    const robot = await this.controller.load();

    this.zUpRoot.add(robot);

    this.tcpGizmo.addTo(robot);
  }

  public setJoint(index: number, angle: number) {
    this.controller.setJoint(index, angle);
  }

  public getJointCount() {
    return this.controller.getJointCount();
  }

  private animate = () => {
    requestAnimationFrame(this.animate);

    this.controls.update();

    this.renderer.render(this.scene, this.camera);
  };

  private onResize = () => {
    const w = this.container.clientWidth;
    const h = this.container.clientHeight;

    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(w, h);
  };

  public dispose() {
    window.removeEventListener("resize", this.onResize);

    this.controls.dispose();

    this.renderer.dispose();
  }
}