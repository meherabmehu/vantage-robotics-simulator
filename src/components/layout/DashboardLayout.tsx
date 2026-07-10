import RobotViewport from "../robot/RobotViewport";
export default function DashboardLayout() {
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

        <p>Robot : Offline</p>

        <p>Joint Count : 7</p>

        <p>TCP : ---</p>

      </aside>

    </div>
  );
}