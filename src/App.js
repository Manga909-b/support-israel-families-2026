import React from "react";
import "./index.css";

export default function App() {
  return (
    <div className="app">
      <header className="hero">
        <h1>Israel Relief Fund</h1>
        <p>
          Support Israeli families affected by war. Every donation helps.
        </p>

        <div className="buttons">
          <a
            href="https://www.paypal.com/paypalme/bernmanga93"
            target="_blank"
            rel="noreferrer"
            className="btn primary"
          >
            Donate with PayPal
          </a>

          <a href="#crypto" className="btn secondary">
            Donate with Crypto
          </a>
        </div>
      </header>

      <section className="section">
        <h2>Quick Donation Amounts</h2>

        <div className="donation-grid">
          {["$1", "$5", "$10", "$25", "₪18", "₪50"].map((amount) => (
            <a
              key={amount}
              href="https://www.paypal.com/paypalme/bernmanga93"
              target="_blank"
              rel="noreferrer"
              className="donation-btn"
            >
              Donate {amount}
            </a>
          ))}
        </div>
      </section>

      <section className="section" id="crypto">
        <h2>Crypto Wallets</h2>

        <div className="wallet">
          <h3>USDT</h3>
          <p>0x888d582327Ef893E2d6b97A27e66e01428036800</p>
        </div>

        <div className="wallet">
          <h3>Bitcoin (BTC)</h3>
          <p>bc1qt4suajd5cxswyl2k76dxc42cqfjh2k39x9c089</p>
        </div>

        <div className="wallet">
          <h3>Ethereum (ETH)</h3>
          <p>0x888d582327Ef893E2d6b97A27e66e01428036800</p>
        </div>
      </section>

      <section className="section">
        <h2>Hebrew Support</h2>

        <div dir="rtl" className="hebrew">
          <h3>תמיכה במשפחות ישראליות שנפגעו מהמלחמה</h3>
          <p>
            כל תרומה חשובה — החל מדולר אחד בלבד.
          </p>
        </div>
      </section>

      <footer className="footer">
        <p>Contact: bernmanga93@gmail.com</p>
      </footer>
    </div>
  );
}
