import './App.css';
import { fetchAllData } from './services/data/api';

function App() {
  console.log(fetchAllData(12));
  return <></>;
}

export default App;
