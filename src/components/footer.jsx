import '../styles/footer.css';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div>
        <p>{t("followBjanka")}
        {/* <p><strong>{t("followBjanka")}</strong> */}
        <br/>
          <FontAwesomeIcon icon={faSquareInstagram} />
          &ensp;<a href='https://www.instagram.com/inspector_bjanka/'>Instagram</a>
        </p>
      </div>
      <p>
        <FontAwesomeIcon icon={faSquareGithub} />
        &ensp;
        {t("ekaterina")} {t("on")}{' '}
        {/* <strong>{t("ekaterina")}</strong> {t("on")}{' '} */}
        <a
          href="https://github.com/KateDronova"
          target="_blank"
          rel="noreferrer"
        >
          GitHub,
        </a>
        &ensp;2023
        {/* <b> 2023</b> */}
      </p>
    </footer>
  );
}

export default Footer;
