import {Routes,Route,Link} from 'react-router-dom'
import AdminHome from './AdminHome'
import ViewStockPurchaser from './ViewStockPurchaser'
import '../style.css'

export default function AdminNavBar() {
  return (
    <div align="left" className='navbar'>     
       <h2>ADMIN PAGE</h2>
        
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/adminhome'>Admin Home</Link></li>
            <li><Link to='/viewstockpurchaser'>View Stock Purchaser</Link></li>
            
        </ul>
        <div className='hr'>
          <hr/>
       </div>
        <Routes>
            <Route path='/' Component={AdminHome}/>
            <Route path='/adminhome' Component={AdminHome}/>
            <Route path='/viewstockpurchaser' Component={ViewStockPurchaser}/>
            
        </Routes>  
    </div>
  )
}
