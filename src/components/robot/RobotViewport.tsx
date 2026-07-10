import { useEffect, useRef } from "react";
import { useRobotStore } from "../../state/robotStore";
import SceneManager from "../../three/SceneManager";
import KeyboardController from "../../input/KeyboardController";
import MotionManager from "../../core/MotionManager";
import LeftControlPanel from "./LeftControlPanel";
import RightStatusPanel from "./RightStatusPanel";

export default function RobotViewport() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<SceneManager | null>(null);
  const keyboardRef = useRef<KeyboardController | null>(null);

  const resetRobot = useRobotStore((state) => state.resetRobot);

  useEffect(() => {
    if (!viewportRef.current) return;

    const scene = new SceneManager(viewportRef.current);

    sceneRef.current = scene;

    keyboardRef.current = new KeyboardController(
      (jointIndex, delta) => {
        const angle = MotionManager.moveJoint(
          jointIndex,
          delta
        );

        scene.setJoint(jointIndex, angle);
      },

      () => {
        scene.home();
        MotionManager.home();
        resetRobot();
      }
    );

    keyboardRef.current.attach();

    return () => {
      keyboardRef.current?.detach();
      scene.dispose();
    };
  }, [resetRobot]);

  const handleJointChange = (
    index: number,
    value: number
  ) => {
    MotionManager.setJoint(index, value);

    sceneRef.current?.setJoint(index, value);
  };

  const handleHome = () => {
    sceneRef.current?.home();

    MotionManager.home();

    resetRobot();
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        gap: "16px",
        overflow: "hidden",
      }}
    >
      {/* LEFT */}

      <LeftControlPanel
        scene={sceneRef.current}
        onHome={handleHome}
      />

      {/* CENTER */}

      <div
        ref={viewportRef}
        style={{
          flex: 1,
          minWidth: 0,
          borderRadius: "12px",
          overflow: "hidden",
          background: "#181c22",
        }}
      />

      {/* RIGHT */}

      <RightStatusPanel
        onJointChange={handleJointChange}
      />
    </div>
  );
}