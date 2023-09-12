import NavBar from '../../components/navBar/navBar';
import Logo from '/src/assets/logo.svg';
import './header.scss';

function Header({ textConstant }) {
  return (
    <header className="header">
      <img src={Logo} alt="logo sportsee" aria-hidden='true' className='header__logo'/>
      <NavBar textConstant={textConstant} className='horizontal-nav' />
    </header>
  );
}

export default Header;