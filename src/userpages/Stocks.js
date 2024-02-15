
import React, { useState, useEffect } from 'react' 
import Stocksdata from './data/stocks.json' 
import TrendingStocks from './data/trendingstocks.json'
 
export default function Stocks() { 
    const [data,setData] = useState([]) // empty array 
    const [TrendingStocksdata,SetTrendingStocksdata]=useState([])
    useEffect(() => {
        setData(Stocksdata)
        SetTrendingStocksdata(TrendingStocks)
        
    }, []);

    
    
    
  return ( 
    
    <div> 
    {
        document.title="Stocks"
    }
        <div class="main-div"> 
        
       <div> 
           <h2 >Top Stocks</h2> 
           <div align="center" class="outsideboxes"> 
                 
           {data.map((stock, index) => ( 
                         
                <div key={index} className="insideboxes"> 
                <div className='pintopstocks'> 
                    &nbsp;&nbsp; {stock.sname} 
                </div> 
                <div className="button-container"> 
                    <button className="BuySmallButton">Buy</button> 
                    <button className="SellSmallButton">Sell</button> 
                </div> 
                </div> 
            ))} 
            </div> 
                       
 
           <br/> 
 
           <h2 >Stocks In Loss</h2> 
           <div align="center" class="outsideboxes" > 
           { 
                data.map((Stocksdata, index)  => ( 
                <div key={index} class="insideboxes">  
                  
                 <div className='pintopstocks'>
                 &nbsp;&nbsp; 
                 {Stocksdata.sname} 
                 </div> 
                  
                 <div className="button-container"> 
                        <button className="BuySmallButton">Buy</button> 
                        <button className="SellSmallButton">Sell</button> 
                    </div>  
                 </div> 
            )) 
        } 
           </div> 
 
 
           <br/> 
 
           <h2 >Most Bought on our Website</h2> 
           <div align="center" class="outsideboxes"> 
           { 
                data.map((Stocksdata, index)  => ( 
                <div key={index} class="insideboxes">  
                  
                 <div className='pintopstocks'>
                 &nbsp;&nbsp; 
                 {Stocksdata.sname} 
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
       <div class="sub-main-div"> 
       <div class="verticalbox"> 
           <h2 >Trending</h2> 
           <div align="center" class="outsideboxes" >  
           { 
                TrendingStocksdata.map((trendingstock, index)  => ( 
                <div key={index} class="insideboxes" >  
                  
                 <div className='pintopstocks'>
                 
                 &nbsp;&nbsp; {trendingstock.symbol} 
                 &nbsp;&nbsp; {trendingstock.sname} 
                 &nbsp;&nbsp; {trendingstock.current_price}
                 
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
    </div> 
  ) 
}