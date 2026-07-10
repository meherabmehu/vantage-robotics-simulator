import { useRobotStore } from "../../state/robotStore";

interface JointPanelProps {
  onJointChange: (index: number, value: number) => void;
}

const jointNames = [
  "Joint 1",
  "Joint 2",
  "Joint 3",
  "Joint 4",
  "Joint 5",
  "Joint 6",
  "Stylus",
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
        gap: "12px",
      }}
    >
      {jointNames.map((name, index) => (
        <div key={index}>
          <label
            style={{
              display: "block",
              marginBottom: "6px",
              color: "#d6d6d6",
              fontSize: "13px",
            }}
          >
            {name}
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
            }}
          />
        </div>
      ))}
    </div>
  );
}