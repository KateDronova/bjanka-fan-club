import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div>
        <p><strong>Follow Bjanka on:</strong>
        <br/>
          <FontAwesomeIcon icon={faSquareInstagram} />
          &ensp;Instagram
        </p>
      </div>
      <p>
        <FontAwesomeIcon icon={faSquareGithub} />
        &ensp;
        <strong>Ekaterina Dronova</strong> на{' '}
        <a
          href="https://github.com/KateDronova"
          target="_blank"
          rel="noreferrer"
        >
          GitHub,
        </a>
        <b> 2023</b>
      </p>
    </footer>
  );
}

export default Footer;
