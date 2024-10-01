const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="footer-left">
            <div className="logo">
              <img src="/images/Footer-logo.png" alt="logo" />
              <p>WeFinance</p>
            </div>
            <p>WeFinance is the highest rated expert team in the world</p>
          </div>
          <div className="footer-center">
            <ul>
              <div>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">How it Works</a>
                </li>
              </div>
              <div>
                <li>
                  <a href="">Our Services</a>
                </li>
                <li>
                  <a href="">contact Us</a>
                </li>
                <li>
                  <a href="">FAQ</a>
                </li>
              </div>
              <div>
                <li>
                  <a href="">Our Team</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
              </div>
            </ul>
          </div>
          <div className="footer-right">
            <a href="">
              <img src="/icons/facebook.png" alt="" />
            </a>
            <a href="">
              <img src="/icons/instagram.png" alt="" />
            </a>
            <a href="">
              <img src="/icons/twitter.png" alt="" />
            </a>
          </div>
          <div className="d-f">
            <p>©2021 WeFinance</p>
            <div className="d-f2">
              <p>Help</p>
              <p>Term & Conditions</p>
              <p>Privacy</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
