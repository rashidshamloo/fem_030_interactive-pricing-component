// style
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p>Developed by Rashid Shamloo</p>
      <ul className="">
        <li>
          <a
            href="https://www.rashidshamloo.ir"
            title="Portfolio"
            target="_blank"
          >
            <i className="bi-briefcase-fill" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/rashidshamloo"
            title="GitHub"
            target="_blank"
          >
            <i className="bi-github" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/rashid-shamloo/"
            title="LinkedIn"
            target="_blank"
          >
            <i className="bi-linkedin" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/rashidshamloo"
            title="Twitter"
            target="_blank"
          >
            <i className="bi-twitter" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
