import { Link } from "react-router-dom";
import { Mail, MessageCircle, Phone } from "lucide-react";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img
            className="footer-logo"
            src="/assets/Header_Logo.png"
            alt="Wed Knot Craft"
          />
          <span className="footer-logo-content"><p>Wed</p><p>Knot</p><p>Craft</p></span>
          <span className="footer-logo-bottom">Wedding Cards</span>
          <strong>
            Largest Wedding
            <br />
            Cards Collections in
            <br />
            Chennai
          </strong>
          <div className="social">
            <span>Follow us with</span>
            <a aria-label="Instagram" href="#">
              <span className="social-glyph">◎</span>
            </a>
            <a aria-label="Facebook" href="#">
              <span className="social-glyph">f</span>
            </a>
            <a aria-label="YouTube" href="#">
              <span className="social-glyph">▶</span>
            </a>
            <a aria-label="WhatsApp" href="#">
              <MessageCircle />
            </a>
          </div>
        </div>
        <div>
          <h3>Information</h3>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/how-to-order">
            How to order wedding invitation online?
          </Link>
        </div>
        <div>
          <h3>Quick Access</h3>
          <Link to="/">Home</Link>
          <Link to="/wedding-invitation">Wedding Cards</Link>
          <Link to="/wedding-invitation?theme=hindu">Hindu Wedding Cards</Link>
        </div>
        <div>
          <h3>Contact Us</h3>
          <p>
            <Phone /> +91 9876543210
          </p>
          <p>
            <Mail /> wedtype@weddingcards.com
          </p>
          <p>
            Operating hours: 10.00Am to
            <br />
            10.00Pm
          </p>
          <b>Monday&nbsp; - &nbsp;Sunday</b>
        </div>
      </div>
      <div className="footer-bottom">
        ©  Wed knot craft India Private
        Limited. All Rights Reserved.
      </div>
    </footer>
  );
}
