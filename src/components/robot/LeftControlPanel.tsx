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
      {/* HEADER */}

      <h3
        style={{
          color: "#f4b942",
          textAlign: "center",
          marginBottom: "18px",
        }}
      >
        Mission Control
      </h3>

      {/* HOME */}

      <button
        onClick={onHome}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "18px",
          background: "#f4b942",
          color: "#111",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: 700,
        }}
      >
        HOME
      </button>

      {/* GO TO XYZ */}

<div
  style={{
    background: "#1d222b",
    borderRadius: "10px",
    padding: "14px",
    marginBottom: "18px",
  }}
>
  <div
    style={{
      color: "#f4b942",
      fontWeight: 700,
      marginBottom: "12px",
    }}
  >
    GO TO XYZ
  </div>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "45px 1fr",
      gap: "8px",
      alignItems: "center",
      marginBottom: "8px",
    }}
  >
    <span>X</span>

    <input
      type="number"
      placeholder="0.000"
      style={{
        padding: "6px",
        borderRadius: "6px",
        border: "1px solid #444",
        background: "#11161d",
        color: "white",
      }}
    />

    <span>Y</span>

    <input
      type="number"
      placeholder="0.000"
      style={{
        padding: "6px",
        borderRadius: "6px",
        border: "1px solid #444",
        background: "#11161d",
        color: "white",
      }}
    />

    <span>Z</span>

    <input
      type="number"
      placeholder="0.000"
      style={{
        padding: "6px",
        borderRadius: "6px",
        border: "1px solid #444",
        background: "#11161d",
        color: "white",
      }}
    />
  </div>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "8px",
      marginTop: "12px",
    }}
  >
    <button>
      GO
    </button>

    <button>
      RESET
    </button>
  </div>
</div>

{/* AUTONOMOUS PIN */}

<div
  style={{
    background: "#1d222b",
    borderRadius: "10px",
    padding: "14px",
    marginBottom: "18px",
  }}
>
  <div
    style={{
      color: "#f4b942",
      fontWeight: 700,
      marginBottom: "12px",
    }}
  >
    AUTONOMOUS PIN
  </div>

  <input
    type="text"
    placeholder="Enter PIN (e.g. 123456)"
    style={{
      width: "100%",
      padding: "8px",
      marginBottom: "10px",
      borderRadius: "6px",
      border: "1px solid #444",
      background: "#11161d",
      color: "white",
      boxSizing: "border-box",
    }}
  />

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "8px",
    }}
  >
    <button>
      START
    </button>

    <button>
      STOP
    </button>
  </div>
</div>

{/* JOYSTICK */}

<div
  style={{
    background: "#1d222b",
    borderRadius: "10px",
    padding: "14px",
    marginBottom: "18px",
  }}
>
  <div
    style={{
      color: "#f4b942",
      fontWeight: 700,
      marginBottom: "12px",
    }}
  >
    JOYSTICK
  </div>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: "8px",
      justifyItems: "center",
      alignItems: "center",
    }}
  >
    <div />

    <button>▲</button>

    <div />

    <button>◀</button>

    <button>●</button>

    <button>▶</button>

    <div />

    <button>▼</button>

    <div />
  </div>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "8px",
      marginTop: "10px",
    }}
  >
    <button>Z+</button>

    <button>Z−</button>
  </div>

  <div
    style={{
      marginTop: "10px",
      fontSize: "12px",
      color: "#9ca3af",
      textAlign: "center",
    }}
  >
    Virtual joystick (integration next)
  </div>
</div>

      {/* CAMERA */}

      <h4
        style={{
          color: "#f4b942",
          marginBottom: "10px",
          marginTop: "2px",
        }}
      >
        Camera Views
      </h4>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "8px",
          marginBottom: "20px",
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

      {/* CARTESIAN */}

      <h4
        style={{
          color: "#f4b942",
          marginBottom: "10px",
        }}
      >
        Cartesian Jog
      </h4>

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

      {/* IK */}

      <h4
        style={{
          color: "#f4b942",
          marginBottom: "10px",
          marginTop: "18px",
        }}
      >
        IK Debug
      </h4>

      <IKDebugPanel />

      {/* UPCOMING */}

      <div
        style={{
          background: "#1d222b",
          borderRadius: "10px",
          padding: "14px",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            color: "#f4b942",
            fontWeight: 700,
            marginBottom: "10px",
          }}
        >
          Upcoming Modules
        </div>

        <div
          style={{
            fontSize: "13px",
            lineHeight: 1.9,
            color: "#c9ced8",
          }}
        >
          • Autonomous PIN
          <br />
          • Virtual Joystick
          <br />
          • Voice Control
          <br />
          • AI Agent
        </div>
      </div>
    </div>
  );
}   