import './App.css';
import HORIZONTAL_NAV_TEXT  from './constants/horizontalNavText';
import SIDEBAR_NAV_TEXT from './constants/sidebarText';
import Header from './layouts/header/header';
import Sidebar from './layouts/sidebar/sidebar';

function App() {
  return (
    <>
      <Header navItems={HORIZONTAL_NAV_TEXT}/>
      <Sidebar navItems={SIDEBAR_NAV_TEXT}/>
    </>
  );
}

export default App;
