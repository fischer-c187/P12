import './navBar.scss';

/**
 * @typedef {Object} NavItems
 * @property {string} text - Label for the link.
 * @property {string} link - href for the link.
 */

/**
 * NavBar component. Iterates over navItemss to generate links.
 * 
 * @param {NavItems[]} navItems - Contains all text and links for the nav.
 * @param {string} [className='nav'] - Additional CSS class.
 * @returns {JSX.Element} Rendered NavBar component.
 */
function NavBar({ navItems, className = 'nav' }) {
  return (
    <nav className={className}>
      <ul className={`${className}__list`}>
        {navItems.map(({ text, link }, index) => (
          <li className={`${className}__item`} key={index}>
            <a href={link} className={`${className}__link`}>
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
