import { useRobotStore } from "../../state/robotStore";

interface JointPanelProps {
  onJointChange: (index: number, value: number) => void;
}

const jointNames = [
  "J1 Base yaw",
  "J2 Shoulder",
  "J3 Elbow",
  "J4 Forearm roll",
  "J5 Wrist pitch",
  "J6 Tool roll",
  "J7 Stylus pitch",
];

export default function JointPanel({
  onJointChange,
}: JointPanelProps) {
  const joints = useRobotStore((state) => state.joints);
  const setJoint = useRobotStore((state) => state.setJoint);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "18px",
      }}
    >
      {jointNames.map((name, index) => (
        <div key={index}>
          <label
  style={{
    display: "flex",
    justifyContent: "space-between",
    color: "#d8dde8",
    fontSize: "13px",
    marginBottom: "6px",
    fontWeight: 500,
  }}
>
            <>
  <span>{name}</span>

  <span
    style={{
      color: "#7fdfff",
      fontWeight: 700,
    }}
  >
    {(joints[index] * 57.2958).toFixed(1)}°
  </span>
</>
          </label>

          <input
            type="range"
            min={-3.14}
            max={3.14}
            step={0.01}
            value={joints[index]}
            onChange={(e) => {
              const value = Number(e.target.value);

              setJoint(index, value);
              onJointChange(index, value);
            }}
            style={{
  width: "100%",
  accentColor: "#13c4ff",
  cursor: "pointer",
}}
          />
        </div>
      ))}
    </div>
  );
}