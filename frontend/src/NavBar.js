import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Stocks from './userpages/Stocks'
import Portfolio from './userpages/Portfolio'
import Transactions from './userpages/Transactions'
import Help from './userpages/Help'
import Profile from './userpages/Profile'


import './style.css'
import About from './userpages/About'
import AdminNavBar from './admin_apps/AdminNavBar'
import AccountProfile from './userpages/accountprofile'

export default function NavBar() {
  return (
    <div align="left" className='navbar'>     
        <ul>
            <li className='Home'><Link to='/' class="Home" >Stock Manager</Link></li>    
                
        </ul>
        
        <ul>
            <li><Link to='/'>Home</Link></li>
            
            <li><Link to='/portfolio'>Portfolio</Link></li>
            <li><Link to='/transactions'>Transactions</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
            <li><Link to='/help'>Help</Link></li>
           <li><Link to="/aboutus">About Us</Link></li> 
        </ul>
        <div className='hr'>
          <hr/>
       </div>
        <Routes>
            <Route path='/' Component={Stocks}/>
            <Route path='/home' Component={Stocks}/>
            <Route path='/portfolio' Component={Portfolio}/>
            <Route path='/transactions' Component={Transactions}/>
            <Route path='/adminhome' Component={AdminNavBar}/>
            <Route path='/profile' Component={Profile}/>
            <Route path='/help' Component={Help}/>
            <Route path='/accountprofile' Component={AccountProfile}/>
            <Route path='/aboutus' Component={About}/>
        </Routes>  
    </div>
  )
}
