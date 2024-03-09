<<<<<<< HEAD:frontend/src/App.js
//import logo from './logo.svg';
=======
>>>>>>> 9392db482f4fbda1088e65af5efea82f11aa412c:src/App.js
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
