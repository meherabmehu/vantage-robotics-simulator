import { useRobotStore } from "../../state/robotStore";
import JointPanel from "./JointPanel";

interface Props {
  onJointChange: (index: number, value: number) => void;
}

export default function RightStatusPanel({
  onJointChange,
}: Props) {
  const joints = useRobotStore((s) => s.joints);
  const tcpPosition = useRobotStore(
    (s) => s.tcpPosition
  );
  const tcpRotation = useRobotStore(
    (s) => s.tcpRotation
  );

  return (
    <div
      style={{
        width: "300px",
        flexShrink: 0,

        background: "#232933",

        borderRadius: "12px",

        padding: "18px",

        display: "flex",
        flexDirection: "column",

        overflowY: "auto",
        overflowX: "hidden",

        color: "white",
      }}
    >
      <h3
        style={{
          color: "#f4b942",
          textAlign: "center",
          marginBottom: "18px",
        }}
      >
        Robot Status
      </h3>

      <div
        style={{
          background: "#1d222b",
          padding: "12px",
          borderRadius: "8px",
          marginBottom: "16px",
        }}
      >
        <strong>TCP Position</strong>

        <div
          style={{
            marginTop: "10px",
            fontSize: "13px",
            lineHeight: 1.8,
          }}
        >
          X : {tcpPosition.x.toFixed(3)} m
          <br />
          Y : {tcpPosition.y.toFixed(3)} m
          <br />
          Z : {tcpPosition.z.toFixed(3)} m
        </div>
      </div>

      <div
        style={{
          background: "#1d222b",
          padding: "12px",
          borderRadius: "8px",
          marginBottom: "16px",
        }}
      >
        <strong>TCP Rotation</strong>

        <div
          style={{
            marginTop: "10px",
            fontSize: "13px",
            lineHeight: 1.8,
          }}
        >
          RX : {tcpRotation.x.toFixed(2)}
          <br />
          RY : {tcpRotation.y.toFixed(2)}
          <br />
          RZ : {tcpRotation.z.toFixed(2)}
        </div>
      </div>

      <div
        style={{
          background: "#1d222b",
          padding: "12px",
          borderRadius: "8px",
          marginBottom: "16px",
        }}
      >
        <strong>Joint Values</strong>

        <div
          style={{
            marginTop: "10px",
            fontSize: "13px",
            lineHeight: 1.8,
          }}
        >
          {joints.map((v, i) => (
            <div key={i}>
              J{i + 1}: {v.toFixed(2)}
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          marginTop: "12px",
        }}
      >
        <JointPanel
          onJointChange={onJointChange}
        />
      </div>
    </div>
  );
}