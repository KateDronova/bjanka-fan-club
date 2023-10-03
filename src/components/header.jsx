import { Link } from 'react-router-dom';
import './header.css';
import { useState } from 'react';

function Header() {
const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <header className="header">
      <nav>
        <Link to={'/user'}>
          <button>LogIn</button>
        </Link>

        {isLoggedIn && (<Link to={'/'}>
          <button>LogOut</button>
        </Link>)}
        
        <Link to={'/signup'}>
          <button>SignUp</button>
        </Link>
      </nav>

      <Link to="/">
        <h1>Bjanka cat fanclub!</h1>
      </Link>

      <nav>
        <div className="header__theme">theme</div>
        <div className="header__lang">lang</div>
      </nav>
    </header>
  );
}

export default Header;
