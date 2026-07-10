import { useRobotStore } from "../../state/robotStore";
import RobotViewport from "../robot/RobotViewport";

export default function DashboardLayout() {
  const tcpPosition = useRobotStore((state) => state.tcpPosition);
  const tcpRotation = useRobotStore((state) => state.tcpRotation);

  return (
    <div className="app">
      <aside className="sidebar">
        <h1>Vantage Robotics</h1>

        <nav>
          <button>Dashboard</button>
          <button>Robot</button>
          <button>Keyboard</button>
          <button>Joystick</button>
          <button>Voice</button>
          <button>PIN</button>
        </nav>
      </aside>

      <main className="viewport">
        <div className="viewer">
          <RobotViewport />
        </div>
      </main>

      <aside className="right-panel">
        <h2>Status</h2>

        <p>Robot : Online</p>

        <p>Joint Count : 7</p>

        <hr />

        <h3>TCP Position</h3>

        <p>X : {tcpPosition.x.toFixed(3)} m</p>
        <p>Y : {tcpPosition.y.toFixed(3)} m</p>
        <p>Z : {tcpPosition.z.toFixed(3)} m</p>

        <hr />

        <h3>TCP Rotation</h3>

        <p>Roll : {(tcpRotation.x * 180 / Math.PI).toFixed(1)}°</p>
        <p>Pitch : {(tcpRotation.y * 180 / Math.PI).toFixed(1)}°</p>
        <p>Yaw : {(tcpRotation.z * 180 / Math.PI).toFixed(1)}°</p>
      </aside>
    </div>
  );
}