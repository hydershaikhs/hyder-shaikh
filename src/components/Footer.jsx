import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-copyright-wrap">
          <p className="footer-copyright">
            &copy; {year} Hyder Shaikh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
