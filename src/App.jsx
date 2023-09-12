import './App.css';
import NavBar from './components/navBar/navBar';
import MENU_TEXT from './constants/menuTexts';

function App() {
  return (
    <>
      <NavBar textConstant={MENU_TEXT} className='horizontal-nav'/>
    </>
  );
}

export default App;
