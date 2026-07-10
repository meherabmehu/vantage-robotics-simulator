import { useEffect, useRef } from "react";
import { useRobotStore } from "../../state/robotStore";
import SceneManager from "../../three/SceneManager";
import KeyboardController from "../../input/KeyboardController";
import MotionManager from "../../core/MotionManager";
import { useModeStore } from "../../state/modeStore";
import { useMissionStore } from "../../state/missionStore";
import LeftControlPanel from "./LeftControlPanel";
import RightStatusPanel from "./RightStatusPanel";

export default function RobotViewport() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<SceneManager | null>(null);
  const keyboardRef = useRef<KeyboardController | null>(null);

  const resetRobot = useRobotStore((state) => state.resetRobot);
  const setInput = useModeStore((s) => s.setInput);
  const setMissionState =
  useMissionStore((s) => s.setState);

const setMissionProgress =
  useMissionStore((s) => s.setProgress);

  useEffect(() => {
    if (!viewportRef.current) return;

    const scene = new SceneManager(viewportRef.current);

    sceneRef.current = scene;

    keyboardRef.current = new KeyboardController(
      (jointIndex, delta) => {
        setInput("Keyboard");
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
    setMissionState("Executing");

    setMissionProgress(40);
    MotionManager.setJoint(index, value);

    sceneRef.current?.setJoint(index, value);
  };

  const handleHome = () => {
    setInput("Dashboard");
    setMissionState("Waiting");

    setMissionProgress(0);
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
  style={{
    flex: 1,
    minWidth: 0,
    position: "relative",
    borderRadius: "12px",
    overflow: "hidden",
    background: "#181c22",
  }}
>
  <div
    ref={viewportRef}
    style={{
      width: "100%",
      height: "100%",
    }}
  />

  {/* FPS */}

  <div
    style={{
      position: "absolute",
      top: 18,
      left: 18,
      background: "#11161d",
      border: "1px solid #263240",
      borderRadius: "8px",
      padding: "8px 14px",
      color: "#dbe5ef",
      fontSize: "13px",
      pointerEvents: "none",
    }}
  >
    <div
      style={{
        color: "#9ca3af",
        fontSize: "11px",
      }}
    >
      FPS
    </div>

    <div
      style={{
        color: "#67ff90",
        fontWeight: 700,
        marginTop: 2,
      }}
    >
      111
    </div>
  </div>

  {/* Camera Position */}

  <div
    style={{
      position: "absolute",
      top: 82,
      left: 18,
      background: "#11161d",
      border: "1px solid #263240",
      borderRadius: "8px",
      padding: "10px 14px",
      color: "#dbe5ef",
      fontSize: "13px",
      pointerEvents: "none",
      minWidth: "180px",
    }}
  >
    <div
      style={{
        color: "#9ca3af",
        marginBottom: 6,
        fontSize: "11px",
      }}
    >
      Camera position
    </div>

    <div
      style={{
        color: "#8ee8ff",
        fontWeight: 600,
      }}
    >
      X 1.15&nbsp;&nbsp;|&nbsp;&nbsp;Y 0.95&nbsp;&nbsp;|&nbsp;&nbsp;Z 1.25
    </div>
  </div>
</div>
     {/* Keyboard Help */}

<div
  style={{
    position: "absolute",
    left: "50%",
    bottom: 18,
    transform: "translateX(-50%)",
    display: "flex",
    gap: "10px",
    padding: "10px 14px",
    borderRadius: "10px",
    background: "rgba(17,22,29,0.92)",
    border: "1px solid #2c3948",
    color: "#dbe5ef",
    fontSize: "12px",
    pointerEvents: "none",
    flexWrap: "wrap",
    justifyContent: "center",
  }}
>
  <span>W/S → X</span>
  <span>A/D → Y</span>
  <span>Q/E → Z</span>
  <span>R/F → Wrist</span>
  <span>HOME → Reset</span>
  <span>ESC → Stop</span>
</div>

      {/* RIGHT */}

      <RightStatusPanel
        onJointChange={handleJointChange}
      />
    </div>
  );
}