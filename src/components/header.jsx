import { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import Button from 'react-bootstrap/Button';

function Header() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <header className="header">
      <nav>
        <Link to={'/user'}>
          <Button variant="primary">LogIn</Button>
        </Link>

        {isLoggedIn && (
          <Link to={'/'}>
            <Button variant="primary">LogOut</Button>
          </Link>
        )}

        <Link to={'/signup'}>
          <Button variant="outline-primary">SignUp</Button>
        </Link>
      </nav>

      <h1>
        <Link to="/">Bjanka cat fanclub!</Link>
      </h1>

      <nav>
        <div className="header__theme">theme</div>
        <div className="header__lang">lang</div>
      </nav>
    </header>
  );
}

export default Header;
