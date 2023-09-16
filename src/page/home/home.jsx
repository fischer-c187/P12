import DataProvider from '../../components/dataProvider/dataProvider';
import UserPresentation from '../../components/userPresentation/userPresentation';
import HORIZONTAL_NAV_TEXT from '../../constants/horizontalNavText';
import SIDEBAR_NAV_TEXT from '../../constants/sidebarText';
import Header from '../../layouts/header/header';
import Sidebar from '../../layouts/sidebar/sidebar';
import './home.scss';

function Home() {
  return (
    <DataProvider>
      <Header navItems={HORIZONTAL_NAV_TEXT} />
      <div className='home-wrapper'>
        <Sidebar navItems={SIDEBAR_NAV_TEXT} />
        <main className='home-main'>
          <UserPresentation />
        </main>
        
      </div>
    </DataProvider>
  );
}

export default Home;