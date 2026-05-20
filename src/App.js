export default function App() {
  return (
    <div
      style={{
        backgroundColor: "#0b1020",
        color: "white",
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "Arial",
        textAlign: "center",
      }}
    >
      <h1>Support Israeli Families 🇮🇱</h1>

      <p style={{ fontSize: "18px", marginTop: "20px" }}>
        Helping Israeli families affected by war.
      </p>

      <div
        style={{
          marginTop: "40px",
          padding: "20px",
          backgroundColor: "#111827",
          borderRadius: "12px",
        }}
      >
        <h2>Donate with PayPal</h2>

        <a
          href="https://paypal.me/bernmanga93"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-block",
            marginTop: "15px",
            padding: "14px 24px",
            backgroundColor: "#0070ba",
            color: "white",
            textDecoration: "none",
            borderRadius: "8px",
            fontWeight: "bold",
          }}
        >
          Donate via PayPal
        </a>
      </div>

      <div
        style={{
          marginTop: "30px",
          padding: "20px",
          backgroundColor: "#111827",
          borderRadius: "12px",
        }}
      >
        <h2>Crypto Donations</h2>

        <p>
          <strong>USDT / ETH:</strong>
        </p>

        <p style={{ wordBreak: "break-all" }}>
          0x888d582327Ef893E2d6b97A2e6be0142B03680d2
        </p>

        <p>
          <strong>BTC:</strong>
        </p>

        <p style={{ wordBreak: "break-all" }}>
          bc1qt4suajd5csxwyl2k76dxc42cqfjh2k39x9c089
        </p>
      </div>
    </div>
  );
}
