import CartesianPanel from "./CartesianPanel";
import IKDebugPanel from "./IKDebugPanel";
import CartesianController from "../../core/CartesianController";
import SceneManager from "../../three/SceneManager";

interface Props {
  scene: SceneManager | null;
  onHome: () => void;
}

export default function LeftControlPanel({
  scene,
  onHome,
}: Props) {
  const refreshTarget = () => {
    scene?.refreshTarget();
  };

  return (
    <div
      style={{
        width: "280px",
        flexShrink: 0,

        background: "#232933",

        borderRadius: "12px",

        padding: "18px",

        display: "flex",
        flexDirection: "column",

        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      <h3
        style={{
          color: "#f4b942",
          textAlign: "center",
          marginBottom: "18px",
        }}
      >
        Manual Control
      </h3>

      <button
        onClick={onHome}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "12px",
          background: "#f4b942",
          color: "#111",
          border: "none",
          borderRadius: "8px",
          fontWeight: 700,
        }}
      >
        HOME
      </button>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "8px",
          marginBottom: "18px",
        }}
      >
        <button onClick={() => scene?.isoView()}>
          ISO
        </button>

        <button onClick={() => scene?.frontView()}>
          FRONT
        </button>

        <button onClick={() => scene?.backView()}>
          BACK
        </button>

        <button onClick={() => scene?.topView()}>
          TOP
        </button>

        <button onClick={() => scene?.leftView()}>
          LEFT
        </button>

        <button onClick={() => scene?.rightView()}>
          RIGHT
        </button>
      </div>

      <CartesianPanel
        onMoveXPositive={() => {
          CartesianController.moveXPositive();
          refreshTarget();
        }}
        onMoveXNegative={() => {
          CartesianController.moveXNegative();
          refreshTarget();
        }}
        onMoveYPositive={() => {
          CartesianController.moveYPositive();
          refreshTarget();
        }}
        onMoveYNegative={() => {
          CartesianController.moveYNegative();
          refreshTarget();
        }}
        onMoveZPositive={() => {
          CartesianController.moveZPositive();
          refreshTarget();
        }}
        onMoveZNegative={() => {
          CartesianController.moveZNegative();
          refreshTarget();
        }}
      />

      <IKDebugPanel />

      <div
        style={{
          marginTop: 20,
          padding: 12,
          borderRadius: 8,
          background: "#1d222b",
          color: "#9ca3af",
          fontSize: 13,
        }}
      >
        <strong>Coming Next</strong>

        <ul
          style={{
            paddingLeft: 18,
            marginTop: 10,
          }}
        >
          <li>Autonomous PIN</li>
          <li>Joystick</li>
          <li>Voice</li>
          <li>Agent</li>
        </ul>
      </div>
    </div>
  );
}