import { create } from "zustand";
import * as THREE from "three";

interface RobotState {
  joints: number[];

  tcpPosition: THREE.Vector3;
  tcpRotation: THREE.Euler;

  setJoint: (index: number, value: number) => void;

  setAllJoints: (values: number[]) => void;

  setTCP: (
    position: THREE.Vector3,
    rotation: THREE.Euler
  ) => void;

  // NEW
  resetRobot: () => void;
}

export const useRobotStore = create<RobotState>((set) => ({
  joints: [0, 0, 0, 0, 0, 0, 0],

  tcpPosition: new THREE.Vector3(),

  tcpRotation: new THREE.Euler(),

  setJoint: (index, value) =>
    set((state) => {
      const next = [...state.joints];

      next[index] = value;

      return {
        joints: next,
      };
    }),

  setAllJoints: (values) =>
    set({
      joints: [...values],
    }),

  setTCP: (position, rotation) =>
    set({
      tcpPosition: position.clone(),
      tcpRotation: rotation.clone(),
    }),

  // NEW
  resetRobot: () =>
    set({
      joints: [0, 0, 0, 0, 0, 0, 0],

      tcpPosition: new THREE.Vector3(),

      tcpRotation: new THREE.Euler(),
    }),
}));