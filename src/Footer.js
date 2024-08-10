const Footer = () => {
    return (
        <footer className="footer">
          <div className="footer-column">
            <img src="./icons_assets/footer-logo.2c859235d6c57bb54176.png" width="100" height="132" alt="Logo" className="footer-logo" />
          </div>
          <div className="footer-column">
            <h3>Doormat Navigation</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#reservations">Reservations</a></li>
              <li><a href="#order">Order Online</a></li>
              <li><a href="#login">Login</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact</h3>
            <ul className="footer-links">
              <li><a href="#address">Address</a></li>
              <li><a href="tel:+123456789">Phone Number</a></li>
              <li><a href="mailto:info@example.com">Email</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Social Media Links</h3>
            <ul className="footer-links">
              <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">TikTok</a></li>
            </ul>
          </div>
        </footer>
      );
};

export default Footer;