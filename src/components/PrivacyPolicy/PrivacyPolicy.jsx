import React from "react";
import "./PrivacyPolicy.css";

export const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <div className="each-policy-container">
        <h3 className="policy-heading">Your privacy is important to us.</h3>
        <p className="policy-para">
          At THALA FANTASY, we provide online Fantasy Cricket, Football, and NBA
          games for your entertainment in a safe and secure environment. We are
          committed to protecting your privacy and ensuring the information you
          provide is used responsibly.
        </p>
        <p className="policy-para">This Privacy Policy explains:</p>
        <ul className="policy-list">
          <li className="policy-list-item">
            What information we collect from you
          </li>
          <li className="policy-list-item">How we use that information</li>
          <li className="policy-list-item">
            Your choices regarding your information
          </li>
        </ul>
      </div>

      <div className="each-policy-container">
        <h3 className="policy-heading">What We Collect</h3>
        <p className="policy-para">
          To become our app user user and access our games, you’ll need to
          register. This requires some personal information, such as:
        </p>
        <ul className="policy-list">
          <li className="policy-list-item">Name</li>
          <li className="policy-list-item">Address</li>
          <li className="policy-list-item">Email address</li>
          <li className="policy-list-item">Phone number</li>
        </ul>
        <p className="policy-para">
          If you don’t provide this information, you may not be able to play our
          games or use all our services.
        </p>
        <p className="policy-para">
          We also collect non-personal information, like your IP address. This
          anonymous data helps us analyze trends, manage the website, track user
          movement, and gather general demographic information.
        </p>
      </div>

      <div className="each-policy-container">
        <h3 className="policy-heading">Using Your Information</h3>
        <p className="policy-para">
          We never share your personal information with third parties without
          your explicit consent. However, by registering, you grant us
          permission to use and share your information as stated in this policy.
        </p>
        <p className="policy-para">We may use your information to:</p>
        <ul className="policy-list">
          <li className="policy-list-item">
            Improve our services and your experience
          </li>
          <li className="policy-list-item">
            Notify you about new games, offers, products, and services
          </li>
          <li className="policy-list-item">
            Share information with sponsors or suppliers who provide prizes for
            our winners
          </li>
        </ul>
      </div>

      <div className="each-policy-container">
        <h3 className="policy-heading">Security</h3>
        <p className="policy-para">
          We use a robust security system to prevent unauthorized access,
          misuse, or alteration of your information. Your registration data is
          password-protected, and only you can access it. We are not responsible
          for any activity that occurs in your account if your password is
          compromised. We strongly advise you never to share your password with
          anyone.
        </p>
      </div>

      <div className="each-policy-container">
        <h3 className="policy-heading">Cookies</h3>
        <p className="policy-para">
          When you visit our site or use our app, cookies may be stored on your
          device. These small text files uniquely identify your browser and help
          personalize your experience. They may also be used for authentication,
          game management, and security purposes.
        </p>
        <p className="policy-para">
          Cookies do not give us access to your computer or personal information
          beyond what you choose to share. Some cookies may be placed by our
          advertisers when you click on ads displayed on app. These cookies are
          controlled by the advertisers, not us.
        </p>
        <p className="policy-para">
          You can choose to accept or decline cookies. Most browsers
          automatically accept them, but you can usually modify your settings to
          decline them if you prefer. This may prevent you from taking full
          advantage of our features and services.
        </p>
      </div>

      <div className="each-policy-container">
        <h3 className="policy-heading">Your Consent</h3>
        <p className="policy-para">
          By registering with THALA FANTASY, you consent to the collection and
          use of your information.
        </p>
      </div>

      <div className="each-policy-container">
        <h3 className="policy-heading">Changes to This Policy</h3>
        <p className="policy-para">
          We may occasionally update our information collection methods and
          modify this Privacy Policy. We’ll post any changes on this page so
          you’re always informed about what information we collect, how we use
          it, and when we disclose it. Please review this policy periodically to
          stay updated.
        </p>
      </div>
    </div>
  );
};
