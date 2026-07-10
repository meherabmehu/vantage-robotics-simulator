import { useEffect, useRef } from "react";
import { useRobotStore } from "../../state/robotStore";
import SceneManager from "../../three/SceneManager";
import JointPanel from "./JointPanel";

export default function RobotViewport() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<SceneManager | null>(null);

  const resetRobot = useRobotStore((state) => state.resetRobot);

  useEffect(() => {
    if (!viewportRef.current) return;

    const scene = new SceneManager(viewportRef.current);

    sceneRef.current = scene;

    return () => {
      scene.dispose();
    };
  }, []);

  const handleJointChange = (
    index: number,
    value: number
  ) => {
    sceneRef.current?.setJoint(index, value);
  };

  const handleHome = () => {
    sceneRef.current?.home();

    resetRobot();
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "320px 1fr",
        gap: "20px",
        width: "100%",
        height: "100%",
      }}
    >
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
            marginBottom: "18px",
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

        <JointPanel onJointChange={handleJointChange} />
      </div>

      <div
        ref={viewportRef}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      />
    </div>
  );
}