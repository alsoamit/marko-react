function Navbar() {
  return (
    <header>
      <nav>
        <div className="logo__wrap">
          <img src="https://github.com/alsoamit/marko-react/blob/master/public/logo.png" alt="marko-logo"></img>
          <h1>Marko</h1>
        </div>
        <button className="btn">New File</button>
      </nav>
    </header>
  );
}

export default Navbar;
