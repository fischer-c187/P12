import NavBar from '../../components/navBar/navBar';
import './sidebar.scss';

function Sidebar({ navItems }) {
  return (
    <aside className='sidebar'>
      <NavBar navItems={navItems} className='sidebar-nav'/>
      <p className='sidebar__copyright'>Copiryght, SportSee 2020</p>
    </aside>
  );
}

export default Sidebar;