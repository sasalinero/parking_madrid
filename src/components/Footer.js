import "../styles/Footer.scss";

function Footer() {
  return (
   <section className="footer"> 

      <h3>🌎Contacto</h3>
      <footer  >
      
        <div >
          <ul >
            <li className="footer_flex">
              <a
                className="js_signature"
                href="https://github.com/sasalinero"
                rel="noopener"
              >
                Samantha Salinero
              </a>{" "}
            </li>
            <li>
              <a href="mailto:sasalinero@gmail.com">💌 Email</a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/samantha-salinero/"
                rel="noopener"
              >
                💼 Linkedin
              </a>
            </li>
            <li>
              <a href="https://github.com/sasalinero" rel="noopener">
                🐱 GitHub
              </a>
            </li>
          </ul>
        </div>
      </footer>
      </section>
  );
}
export default Footer;
