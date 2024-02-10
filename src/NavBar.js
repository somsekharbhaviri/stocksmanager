import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Stocks from './userpages/Stocks'
import Portfolio from './userpages/Portfolio'
import Transactions from './userpages/Transactions'
import Help from './userpages/Help'
import Profile from './userpages/Profile'
import './style.css'

export default function NavBar() {
  return (
    <div align="left" className='nav'>     
        <h2 ><Link to='/' className='Home'>Stocks Manager</Link></h2>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/portfolio'>Portfolio</Link></li>
            <li><Link to='/transactions'>Transactions</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
            <li><Link to='/help'>Help</Link></li>
        </ul>
        <hr style={{color:"red"}}/>
        <Routes>
            <Route path='/' Component={Stocks}/>
            <Route path='/portfolio' Component={Portfolio}/>
            <Route path='/transactions' Component={Transactions}/>
            <Route path='/profile' Component={Profile}/>
            <Route path='/help' Component={Help}/>
        </Routes>  
    </div>
  )
}
