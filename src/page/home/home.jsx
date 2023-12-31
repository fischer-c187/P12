import DataProvider from '../../components/dataProvider/dataProvider';
import UserPresentation from '../../components/userPresentation/userPresentation';
import HORIZONTAL_NAV_TEXT from '../../constants/horizontalNavText';
import SIDEBAR_NAV_TEXT from '../../constants/sidebarText';
import { DailyAcitvityChart } from '../../layouts/dailyActivityChart/dailyActivityChart';
import Header from '../../layouts/header/header';
import { AverageSessionChart } from '../../layouts/AverageSessionChart/averageSessionChart';
import NutrientsInfo from '../../layouts/nutrientsInfo/nutrientsInfo';
import Sidebar from '../../layouts/sidebar/sidebar';
import './home.scss';
import { PerformanceChart } from '../../layouts/performanceChart/performanceChart';
import { ScoreChart } from '../../layouts/scoreChart/scoreChart';

/**
 * Home component serves as the entry point for the application and renders various sub-components.
 */
function Home() {
  return (
    <DataProvider>
      <Header navItems={HORIZONTAL_NAV_TEXT} />
      <div className='home'>
        <Sidebar navItems={SIDEBAR_NAV_TEXT} />
        
        <main className='home__content'>
          <UserPresentation />
          <div className='home__metrics'>
            <section className='home__chart'>
              <DailyAcitvityChart />
              <div className='home__chart-grid'>
                <AverageSessionChart />
                <PerformanceChart />
                <ScoreChart />
              </div>
            </section>
            <NutrientsInfo />
          </div>
        </main>
      </div>
    </DataProvider>
  );
}

export default Home;
