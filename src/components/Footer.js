import "../styles/Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <h3>🌎Contacto</h3>
      <ul className="footer_ul">
        <li className="footer_li">
          <a href="mailto:sasalinero@gmail.com">💌 Email</a>
        </li>
        <li className="footer_li" >
          <a
            href="https://www.linkedin.com/in/samantha-salinero/"
            rel="noopener"
          >
            💼 Linkedin
          </a>
        </li>
        <li className="footer_li">
          <a href="https://github.com/sasalinero" rel="noopener">
            🐱 GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
}
export default Footer;
