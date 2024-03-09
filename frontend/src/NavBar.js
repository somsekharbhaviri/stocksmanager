import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Stocks from './userpages/Stocks'
import Portfolio from './userpages/Portfolio'
import Transactions from './userpages/Transactions'
import Help from './userpages/Help'
import Profile from './userpages/Profile'
<<<<<<< HEAD:frontend/src/NavBar.js


=======
import Login from './userpages/Login'
import UserRegistration from './userpages/UserRegistration'
>>>>>>> 9392db482f4fbda1088e65af5efea82f11aa412c:src/NavBar.js
import './style.css'
import About from './userpages/About'
import AdminNavBar from './admin_apps/AdminNavBar'
import AccountProfile from './userpages/accountprofile'

export default function NavBar() {
  return (
    <div align="left" className='navbar'> 
    <div className='ul'>
        <ul>
            <li className='Home'><Link to='/' class="Home" >Stock Manager</Link></li>    
                
        </ul>
        
        <ul>
<<<<<<< HEAD:frontend/src/NavBar.js
            <li><Link to='/'>Home</Link></li>
            
=======
            <li style={{marginLeft:"600px"}}><Link to='/home'>Home</Link></li>
>>>>>>> 9392db482f4fbda1088e65af5efea82f11aa412c:src/NavBar.js
            <li><Link to='/portfolio'>Portfolio</Link></li>
            <li><Link to='/transactions'>Transactions</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
            <li><Link to='/help'>Help</Link></li>
<<<<<<< HEAD:frontend/src/NavBar.js
           <li><Link to="/aboutus">About Us</Link></li> 
=======
            <li style={{marginLeft:"500px"}}><Link to='/login'>Log Out</Link></li>
>>>>>>> 9392db482f4fbda1088e65af5efea82f11aa412c:src/NavBar.js
        </ul>
        <div className='hr'>
          <hr/>
       </div>
       </div>

       <div>
        <Routes>
<<<<<<< HEAD:frontend/src/NavBar.js
            <Route path='/' Component={Stocks}/>
=======
            <Route path='/' Component={Login}/>
>>>>>>> 9392db482f4fbda1088e65af5efea82f11aa412c:src/NavBar.js
            <Route path='/home' Component={Stocks}/>
            <Route path='/portfolio' Component={Portfolio}/>
            <Route path='/transactions' Component={Transactions}/>
            <Route path='/adminhome' Component={AdminNavBar}/>
            <Route path='/profile' Component={Profile}/>
            <Route path='/help' Component={Help}/>
<<<<<<< HEAD:frontend/src/NavBar.js
            <Route path='/accountprofile' Component={AccountProfile}/>
            <Route path='/aboutus' Component={About}/>
=======
            <Route path='/login' Component={Login}/>
            <Route path='/registration' Component={UserRegistration}/>
>>>>>>> 9392db482f4fbda1088e65af5efea82f11aa412c:src/NavBar.js
        </Routes>  
          <br/>
          <br/>
          
        <footer>
          <p style={{color:"white"}}>&copy; 2024 Stocksmanager. All rights reserved.</p>
        </footer>
        </div>
    </div>
  )
}
