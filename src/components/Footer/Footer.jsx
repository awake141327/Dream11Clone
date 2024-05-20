import { assets, socialMedia } from "../../assets/assets";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-row">
          <div className="footer-left">
            <img
              src={assets.logoWhite}
              alt="Logo"
              style={{ maxWidth: "120px" }}
            />
            <ul>
              {socialMedia.map((media) => (
                <li key={media.id}>
                  <img src={media.img} alt={media.alt} />
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-center">
            <ul>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/fantasy-cricket"
              >
                <li>Fantasy Cricket</li>
              </Link>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/fantasy-sports"
              >
                <li>Fantasy Sports</li>
              </Link>

              <a
                style={{
                  color: "white",
                  textDecoration: "none",
                  transition: "1s",
                }}
                href="#how-to-play"
              >
                <li>How to play</li>
              </a>
            </ul>
            <ul>
              <a
                style={{ color: "white", textDecoration: "none" }}
                href="download.apk"
                download="dream11.apk"
              >
                <li>Fantasy Cricket App Download</li>
              </a>
              <li>About Us</li>
              <li>Help & Support</li>
            </ul>
          </div>
          <div className="footer-right">
            <h6>FOUNDING MEMBER</h6>
            <div className="ft-img">
              <img src={assets.fifs} alt="FIFS" style={{ width: "40px" }} />
            </div>
            <h6>FAIRPLAY POLICY</h6>
            <div className="ft-img">
              <img src={assets.fplogo} alt="FP" style={{ width: "40px" }} />
            </div>
          </div>
        </div>
        <div className="border-top">
          <h6>CORPORATE OFFICE</h6>
          <p>
            ONE BKC, Tower A, 12th & 14th Floor, Unit 1201 & 1202 and 1401 &
            1402, Plot C-66, G Block, Bandra Kurla Complex, Bandra (East),
            Mumbai 400 051
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="ft-row">
            <Link to="/privacy-policy">Privacy Policy</Link> |{" "}
            <Link to="/terms-conditions">Terms & Conditions</Link>
          </div>
        </div>
      </div>
      <div className="copy-right">
        This game may be habit-forming or financially risky. Play responsibly.
      </div>
    </footer>
  );
};

export default Footer;
