import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';

function SignUpPage() {
  const { t } = useTranslation();

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
        <Button variant="secondary">{t('return')}</Button>
      </Link>
    </>
  );
}

export default SignUpPage;
