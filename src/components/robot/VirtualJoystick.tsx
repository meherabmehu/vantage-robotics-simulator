interface Props {
  onUp: () => void;
  onDown: () => void;
  onLeft: () => void;
  onRight: () => void;
  onZPlus: () => void;
  onZMinus: () => void;
}

const btnStyle: React.CSSProperties = {
  width: 44,
  height: 44,
  borderRadius: 8,
  border: "none",
  background: "#2d3748",
  color: "white",
  fontSize: 18,
  cursor: "pointer",
};

export default function VirtualJoystick({
  onUp,
  onDown,
  onLeft,
  onRight,
  onZPlus,
  onZMinus,
}: Props) {
  return (
    <div
      style={{
        background: "#1d222b",
        borderRadius: 10,
        padding: 14,
      }}
    >
      <div
        style={{
          color: "#f4b942",
          fontWeight: 700,
          marginBottom: 12,
        }}
      >
        Virtual Joystick
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,44px)",
          justifyContent: "center",
          gap: 8,
        }}
      >
        <div />

        <button
          style={btnStyle}
          onClick={onUp}
        >
          ▲
        </button>

        <div />

        <button
          style={btnStyle}
          onClick={onLeft}
        >
          ◀
        </button>

        <button
          style={btnStyle}
        >
          ●
        </button>

        <button
          style={btnStyle}
          onClick={onRight}
        >
          ▶
        </button>

        <div />

        <button
          style={btnStyle}
          onClick={onDown}
        >
          ▼
        </button>

        <div />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 8,
          marginTop: 12,
        }}
      >
        <button
          style={btnStyle}
          onClick={onZPlus}
        >
          Z+
        </button>

        <button
          style={btnStyle}
          onClick={onZMinus}
        >
          Z-
        </button>
      </div>
    </div>
  );
}