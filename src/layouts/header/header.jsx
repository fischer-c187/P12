import NavBar from '../../components/navBar/navBar';
import Logo from '/src/assets/logo.svg';
import './header.scss';

/**
 * @typedef {Object} NavItems
 * @property {string} text - Label for the link.
 * @property {string} link - href for the link.
 */

/**
 * Renders the main horizontal bar containing the company logo and navigation bar.
 * 
 * @param {NavItems[]} navItems - Contains all text and links for the nav.
 * @returns {JSX.Element} Rendered Header component.
 */
function Header({ navItems }) {
  return (
    <header className='header'>
      <a href='/' className='header__logo-link'>
        <img
          src={Logo}
          alt='logo sportsee'
          aria-hidden='true'
          className='header__logo'
        />
      </a>

      <NavBar navItems={navItems} className='horizontal-nav' />
    </header>
  );
}

export default Header;
