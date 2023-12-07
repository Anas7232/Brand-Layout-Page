

const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        {/* <img src="/images/brand_logo.png" alt="logo" /> */}
        <h2 style={{ fontSize: '20px', color: '#EC7063' }}> NIKE BRAND </h2>
      </div>
      <ul>
        <li className="link" href="#">Menu</li>
        <li className="link" href="#">Location</li>
        <li className="link" href="#">About</li>
        <li className="link" href="#">Contact</li>
      </ul>

      <button className="navbar-button">Login</button>
    </nav>
  );
};

export default Navigation;
