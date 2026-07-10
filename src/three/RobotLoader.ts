import * as THREE from "three";
import URDFLoader from "urdf-loader";

export default class RobotLoader {
  private loader: URDFLoader;

  constructor() {
    const manager = new THREE.LoadingManager();

    this.loader = new URDFLoader(manager);
    this.loader.packages = "";
  }

  public load(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.loader.load(
        "/stylus_arm.urdf",

        (robot) => {
          resolve(robot);
        },

        undefined,

        reject
      );
    });
  }
}