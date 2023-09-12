import './App.css';
import NavBar from './components/navBar/navBar';
import HORIZONTAL_NAV_TEXT  from './constants/horizontalNavText';

function App() {
  return (
    <>
      <NavBar textConstant={HORIZONTAL_NAV_TEXT} className='horizontal-nav'/>
    </>
  );
}

export default App;
