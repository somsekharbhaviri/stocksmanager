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
       <div class="verticalboxportfolio"> 
           <h2 >Trending</h2> 
           <div align="center" class="outsideboxes" >  
           { 
                MyStocks.map((Mystock, index)  => ( 
                <div key={index} class="insideboxes" >  
                  
                 <div className='pintopstocks'>
                 <i className='font-insideboxes'>&nbsp;&nbsp; {Mystock.symbol} </i>
                 <i className='font-insideboxes' >&nbsp;&nbsp; {Mystock.sname} </i>
                 <i className='font-insideboxes'>&nbsp;&nbsp; {Mystock.current_price}</i>
                 <i className='font-insideboxes'>&nbsp;&nbsp; {Mystock.change_percent}</i>
                 <i className='font-insideboxes'>&nbsp;&nbsp; {Mystock.sector}</i>

                 </div> 
                  
                 <div className="button-container-portfolio"> 
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
