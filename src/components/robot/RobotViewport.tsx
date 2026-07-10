import { useEffect, useRef } from "react";
import { useRobotStore } from "../../state/robotStore";
import SceneManager from "../../three/SceneManager";
import JointPanel from "./JointPanel";
import CartesianPanel from "./CartesianPanel";
import KeyboardController from "../../input/KeyboardController";
import MotionManager from "../../core/MotionManager";
import CartesianController from "../../core/CartesianController";
import IKDebugPanel from "./IKDebugPanel";

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

  const refreshTarget = () => {
    sceneRef.current?.refreshTarget();
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "260px 1fr 280px",
        gap: "16px",
        width: "100%",
        height: "100%",
      }}
    >
      {/* LEFT CONTROL PANEL */}

      <div
        style={{
          background: "#232933",
          borderRadius: "12px",
          padding: "18px",
          overflowY: "auto",
        }}
      >
        <h3
          style={{
            color: "#f4b942",
            marginBottom: "18px",
          }}
        >
          Joint Control
        </h3>

        <button
          onClick={handleHome}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "12px",
            background: "#f4b942",
            color: "#111",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: 700,
          }}
        >
          HOME
        </button>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "8px",
            marginBottom: "18px",
          }}
        >
          <button onClick={() => sceneRef.current?.isoView()}>
            ISO
          </button>

          <button onClick={() => sceneRef.current?.frontView()}>
            FRONT
          </button>

          <button onClick={() => sceneRef.current?.backView()}>
            BACK
          </button>

          <button onClick={() => sceneRef.current?.topView()}>
            TOP
          </button>

          <button onClick={() => sceneRef.current?.leftView()}>
            LEFT
          </button>

          <button onClick={() => sceneRef.current?.rightView()}>
            RIGHT
          </button>
        </div>

        <CartesianPanel
          onMoveXPositive={() => {
            CartesianController.moveXPositive();
            refreshTarget();
          }}
          onMoveXNegative={() => {
            CartesianController.moveXNegative();
            refreshTarget();
          }}
          onMoveYPositive={() => {
            CartesianController.moveYPositive();
            refreshTarget();
          }}
          onMoveYNegative={() => {
            CartesianController.moveYNegative();
            refreshTarget();
          }}
          onMoveZPositive={() => {
            CartesianController.moveZPositive();
            refreshTarget();
          }}
          onMoveZNegative={() => {
            CartesianController.moveZNegative();
            refreshTarget();
          }}
        />

        <IKDebugPanel />

        <JointPanel onJointChange={handleJointChange} />
      </div>

      {/* ROBOT VIEW */}

      <div
        ref={viewportRef}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "12px",
          overflow: "hidden",
          background: "#181c22",
        }}
      />

      {/* RIGHT PANEL */}

      <div
        style={{
          background: "#232933",
          borderRadius: "12px",
          padding: "18px",
          color: "white",
        }}
      >
        <h3
          style={{
            color: "#f4b942",
            marginBottom: "20px",
          }}
        >
          Robot Status
        </h3>

        <p
          style={{
            opacity: 0.8,
            lineHeight: 1.8,
          }}
        >
          Status panel redesign
          <br />
          will be added
          <br />
          in the next step.
        </p>
      </div>
    </div>
  );
}