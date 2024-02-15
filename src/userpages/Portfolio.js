import React, { useState, useEffect } from 'react' 
import MyStocksdata from './data/trendingstocks.json'


export default function Portfolio() {

  const [MyStocks,SetMyStocks]=useState([])
  useEffect(()=>{
    SetMyStocks(MyStocksdata)
  }

  )

  return (
    <div>
        <div> 
       <div class="verticalbox"> 
           <h2 >Trending</h2> 
           <div align="center" class="outsideboxes" >  
           { 
                MyStocks.map((Mystock, index)  => ( 
                <div key={index} class="insideboxes" >  
                  
                 <div className='pintopstocks'>
                 
                 &nbsp;&nbsp; {Mystock.symbol} 
                 &nbsp;&nbsp; {Mystock.sname} 
                 &nbsp;&nbsp; {Mystock.current_price}
                 
                 </div> 
                  
                 <div className="button-container"> 
                        <button className="BuySmallButton">Buy</button> 
                        <button className="SellSmallButton">Sell</button> 
                    </div>  
                 </div> 
            )) 
        }
           </div> 
       </div> 
       </div> 
    </div>
  )
}
