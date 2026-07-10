import RobotViewport from "../components/robot/RobotViewport";

export default function RobotPage() {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        overflow: "hidden",
        padding: 10,
      }}
    >
      <RobotViewport />
    </div>
  );
}