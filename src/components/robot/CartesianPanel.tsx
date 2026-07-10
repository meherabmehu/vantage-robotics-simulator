interface Props {
  onMoveXPositive: () => void;
  onMoveXNegative: () => void;

  onMoveYPositive: () => void;
  onMoveYNegative: () => void;

  onMoveZPositive: () => void;
  onMoveZNegative: () => void;
}

function Row({
  label,
  plus,
  minus,
}: {
  label: string;
  plus: () => void;
  minus: () => void;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "55px 1fr 1fr",
        gap: "8px",
        alignItems: "center",
        marginBottom: "10px",
      }}
    >
      <span
        style={{
          color: "white",
          fontWeight: 600,
        }}
      >
        {label}
      </span>

      <button onClick={plus}>+</button>

      <button onClick={minus}>-</button>
    </div>
  );
}

export default function CartesianPanel(props: Props) {
  return (
    <div
      style={{
        marginBottom: "20px",
        padding: "12px",
        borderRadius: "8px",
        background: "#1d222b",
      }}
    >
      <h4
        style={{
          color: "#f4b942",
          marginBottom: "14px",
        }}
      >
        TCP Target
      </h4>

      <Row
        label="X"
        plus={props.onMoveXPositive}
        minus={props.onMoveXNegative}
      />

      <Row
        label="Y"
        plus={props.onMoveYPositive}
        minus={props.onMoveYNegative}
      />

      <Row
        label="Z"
        plus={props.onMoveZPositive}
        minus={props.onMoveZNegative}
      />
    </div>
  );
}