import './App.css';
import HORIZONTAL_NAV_TEXT  from './constants/horizontalNavText';
import Header from './layouts/header/header';

function App() {
  return (
    <>
      <Header textConstant={HORIZONTAL_NAV_TEXT}/>
    </>
  );
}

export default App;
