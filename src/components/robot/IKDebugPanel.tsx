import { useRobotStore } from "../../state/robotStore";

export default function IKDebugPanel() {
  const tcp = useRobotStore(
    (s) => s.tcpPosition
  );

  return (
    <div
      style={{
        marginBottom: 20,
        padding: 12,
        borderRadius: 8,
        background: "#1d222b",
        color: "white",
        fontSize: 13,
      }}
    >
      <h4
        style={{
          color: "#58d68d",
          marginBottom: 10,
        }}
      >
        TCP
      </h4>

      <div>X : {tcp.x.toFixed(3)}</div>
      <div>Y : {tcp.y.toFixed(3)}</div>
      <div>Z : {tcp.z.toFixed(3)}</div>
    </div>
  );
}