import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function SignUpPage() {
  return (
    <>
      <h2>Sign UP</h2>
      <form></form>
      <div>
        <img
          src={require('../images/chilling_Bjanka.png')}
          alt="bjanka_cat"
          width="40%"
          height="auto"
        />
      </div>
      <Link to={'/'}>
        <Button variant="secondary">Return</Button>
      </Link>
    </>
  );
}

export default SignUpPage;
