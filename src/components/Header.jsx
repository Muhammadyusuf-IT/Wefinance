const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-top">
          <a href="#" className="logo">
            <img src="/icons/logo.png" alt="Logo" />
            <h1>WeFinance</h1>
          </a>
          <nav>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">How it Works</a>
              </li>
              <li>
                <a href="">Our Services</a>
              </li>
              <li>
                <a href="">More</a>
              </li>
            </ul>
          </nav>
          <button>Contact Us</button>
        </div>
        <div className="header-bottom">
          <h1>Financial Solutions.</h1>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics
          </p>
          <button>Let’s Talk</button>
          <img className="coins" src="/images/Coins.png" alt="coins" />
          <img className="adam" src="/images/adam.png" alt="adam" />
        </div>
      </div>
    </header>
  );
};

export default Header;
