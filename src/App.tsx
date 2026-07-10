import TopBar from "./components/layout/TopBar";
import RobotPage from "./pages/RobotPage";

export default function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#181c22",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <TopBar />

      <div
        style={{
          flex: 1,
          overflow: "hidden",
        }}
      >
        <RobotPage />
      </div>
    </div>
  );
}