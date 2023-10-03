import { useState } from 'react';
import { Link } from 'react-router-dom';

function UserPage() {
  const [user, setUser] = useState('friend');
  return (
    <>
      <h2>We are glad you are here, {user}!</h2>
      <section>
        <h3>Games</h3>
        <nav>
          <Link to={'/'}><img src='../images/temporary.jpg' alt='dress_game'></img></Link>
          <Link to={'/'}><img src='../images/temporary.jpg' alt='ribbon_game'></img></Link>
          <Link to={'/'}><img src='../images/temporary.jpg' alt='quiz'></img></Link>
        </nav>
      </section>
      <section>
        <h3>Gallery</h3>
        <ul className='carousel'>
          <li>Photo1</li>
        </ul>
      </section>
      <Link to={'/'}>Return</Link>
    </>
  );
}

export default UserPage;
