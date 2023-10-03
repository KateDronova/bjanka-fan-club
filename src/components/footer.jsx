import './footer.css'

function Footer() {
  return (
    <footer className="footer">
      <p>
        <strong>Ekaterina Dronova</strong> на{' '}
        <a
          href="https://github.com/KateDronova"
          target="_blank"
          rel="noreferrer"
        >
          GitHub,
        </a>
        <b>2023</b>
      </p>
      <img src="../images/footer.png" alt="bjanka_cat" width="50svh" height="auto"/>
    </footer>
  );
}

export default Footer;
