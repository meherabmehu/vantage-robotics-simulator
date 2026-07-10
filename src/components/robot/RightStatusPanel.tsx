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
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "18px",
  }}
>
  <span
    style={{
      fontSize: "13px",
      color: "#9ca3af",
      fontWeight: 600,
    }}
  >
    TCP • BASE FRAME
  </span>

  <span
    style={{
      background: "#0d3d2d",
      color: "#58f59b",
      padding: "3px 10px",
      borderRadius: "20px",
      fontSize: "11px",
      fontWeight: 700,
    }}
  >
    IDLE
  </span>
</div>

      <div
        style={{
          background: "#1d222b",
          padding: "12px",
          borderRadius: "8px",
          marginBottom: "16px",
        }}
      >
        <strong>TCP Position (mm)</strong>

        <div
          style={{
            marginTop: "10px",
            fontSize: "13px",
            lineHeight: 1.8,
          }}
        >
          X : {(tcpPosition.x * 1000).toFixed(1)}
          <br />
          Y : {(tcpPosition.y * 1000).toFixed(1)}
          <br />
          Z : {(tcpPosition.z * 1000).toFixed(1)}
        </div>
      </div>

      <div
  style={{
    marginBottom: "18px",
  }}
>
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "6px",
      fontSize: "12px",
      color: "#9ca3af",
    }}
  >
    <span>Reach from shoulder</span>
    <span>586 / 1151 mm</span>
  </div>

  <div
    style={{
      height: "6px",
      background: "#313844",
      borderRadius: "20px",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        width: "51%",
        height: "100%",
        background: "#13c4ff",
      }}
    />
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