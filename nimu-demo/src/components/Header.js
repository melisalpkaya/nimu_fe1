import '../css/header.css';


const Header = () => {
    return (
      <header className="header dark-background">
        <img id="header-logo1" src={process.env.PUBLIC_URL + '/img/logo1.png'}  />
        <img id="header-logo2" src={process.env.PUBLIC_URL + '/img/logo2.png'} />
      </header>
    );
  };
  
  export default Header;