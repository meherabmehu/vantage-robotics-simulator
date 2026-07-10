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

          <h2>Industrial Robot Simulator</h2>

          <p>3D Viewport Coming Soon...</p>

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