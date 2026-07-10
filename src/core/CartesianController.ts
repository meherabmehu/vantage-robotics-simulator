import * as THREE from "three";
import CartesianTarget from "./CartesianTarget";

const STEP = 0.01;
const ROT_STEP = THREE.MathUtils.degToRad(2);

export default class CartesianController {
  public static moveXPositive() {
    CartesianTarget.moveX(STEP);
  }

  public static moveXNegative() {
    CartesianTarget.moveX(-STEP);
  }

  public static moveYPositive() {
    CartesianTarget.moveY(STEP);
  }

  public static moveYNegative() {
    CartesianTarget.moveY(-STEP);
  }

  public static moveZPositive() {
    CartesianTarget.moveZ(STEP);
  }

  public static moveZNegative() {
    CartesianTarget.moveZ(-STEP);
  }

  public static rotateXPositive() {
    CartesianTarget.rotateX(ROT_STEP);
  }

  public static rotateXNegative() {
    CartesianTarget.rotateX(-ROT_STEP);
  }

  public static rotateYPositive() {
    CartesianTarget.rotateY(ROT_STEP);
  }

  public static rotateYNegative() {
    CartesianTarget.rotateY(-ROT_STEP);
  }

  public static rotateZPositive() {
    CartesianTarget.rotateZ(ROT_STEP);
  }

  public static rotateZNegative() {
    CartesianTarget.rotateZ(-ROT_STEP);
  }

  public static reset() {
    CartesianTarget.reset();
  }

  public static getPosition() {
    return CartesianTarget.getPosition();
  }

  public static getRotation() {
    return CartesianTarget.getRotation();
  }
}