import NavBar from '../../components/navBar/navBar';
import SelectUser from '../../components/selectUser/selectUser';
import './sidebar.scss';

/**
 * @typedef {Object} NavItem
 * @property {JSX.Element | string} text - Display content (text or JSX) for the navigation link.
 * @property {string} link - URL or path the link points to.
 */

/**
 * Component to render the sidebar. Contains a navigation bar to switch between different sports and a copyright notice.
 * 
 * @param {NavItem[]} navItems - Array of navigation items for the sidebar.
 * @returns {JSX.Element} Rendered Sidebar component.
 */
function Sidebar({ navItems }) {
  return (
    <aside className='sidebar'>
      <SelectUser className='sidebar'/>
      <NavBar navItems={navItems} className='sidebar-nav' />
      <p className='sidebar__copyright'>Copiryght, SportSee 2020</p>
    </aside>
  );
}

export default Sidebar;
