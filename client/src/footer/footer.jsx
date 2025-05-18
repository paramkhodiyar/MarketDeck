import React from "react";
import "./footer.css";
import logo from "./logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-sections">
        <div className="footer-col">
          <h3 className="footer-title"><img src={logo} width={35} height={35}/> MarketDeck</h3>
          <p className="footer-desc">
            Smart market insights for serious investors and curious beginners.
          </p>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Features</h4>
          <ul className="footer-list">
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/watchlist">Watchlist</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Account</h4>
          <ul className="footer-list">
            <li><a href="/signin">Sign In</a></li>
            <li><a href="/signup">Create Account</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Legal</h4>
          <ul className="footer-list">
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/disclaimer">Disclaimer</a></li>
          </ul>
        </div>
      </div>

      <hr className="footer-line" />

      <div className="footer-bottom">
        <p className="footer-copy">
          MarketDeck © {new Date().getFullYear()} | Built for educational purposes only.
        </p>
        <p className="footer-disclaimer">Not financial advice. Markets involve risk.</p>
      </div>
    </footer>
  );
}

export default Footer;
