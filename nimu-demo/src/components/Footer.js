import '../css/global.css'

const Footer = ({ links }) => {
  if (!links || links.length === 0) {
    return null; // Eğer links undefined ya da boşsa hiçbir şey render etme
  }
    return (
      <footer className="footer">
        {links.map((link, index) => (
          <a key={index} 
            href={link.href} 
            className={link.className || ''}
          >
            {link.text}
          </a>
        ))}
        <div>
          <p>By using NiMu, you agree with the <strong>Terms of Service</strong> and <strong>Privacy Policy</strong> </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;