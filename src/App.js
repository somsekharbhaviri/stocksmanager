import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import { BrowserRouter as Browser } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Browser>
        <NavBar/>
      </Browser>
    </div>
  );
}

export default App;
