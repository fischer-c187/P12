import './navBar.scss';

function NavBar({ textConstant, className = 'nav' }) {
  return (
    <nav className={className}>
      <ul className={`${className}__list`}>
        {textConstant.map(({ text, link }, index) => (
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
