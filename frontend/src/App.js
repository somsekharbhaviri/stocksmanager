//import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import { BrowserRouter as Browser } from 'react-router-dom';
//import AdminHome from './admin_apps/AdminHome';

function App() {
  return (
    <div className="App">
      <Browser>
        <NavBar/>
        {/* <AdminHome/> */}
      </Browser>
    </div>
  );
}

export default App;
