export default function TopBar() {
  return (
    <div
      style={{
        height: 46,
        background: "#0c1020",
        borderBottom: "1px solid #202838",

        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        padding: "0 16px",

        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 12,
          alignItems: "center",
        }}
      >
        <strong
          style={{
            color: "#58d6ff",
          }}
        >
          DRY RUN
        </strong>

        <span
          style={{
            color: "#ddd",
          }}
        >
          7-Joint Stylus Arm
        </span>
      </div>

      <div
        style={{
          fontSize: 12,
          color: "#8c97b5",
        }}
      >
        MotionCommand pipeline:
        dashboard · joystick · keyboard · voice · agent
      </div>

      <button
        style={{
          background: "#d92b4b",
          color: "white",
          border: "none",
          padding: "8px 16px",
          borderRadius: 6,
          fontWeight: 700,
        }}
      >
        STOP
      </button>
    </div>
  );
}