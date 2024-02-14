import React, { useState, useEffect } from 'react'
import Stocksdata from './data/stocks.json'

export default function Stocks() {
    const [data,setData] = useState([]) // empty array

    useEffect(() => {
        setData(Stocksdata)
    }, []);
  return (
    <div>
        <div class="main-div">
       
       <div>
           <h2 >Top Stocks</h2>
           <div align="center" class="outsideboxes">
                
               {
                data.map((Stocksdata, index)  => (
                <div key={index} class="insideboxes"> 
                 
                 <div className='pintopstocks'>{Stocksdata.sid}
                 &nbsp;&nbsp;
                 {Stocksdata.sname}
                 </div>
                 
                 <button class="BuySmallButton">B</button> <button class="SellSmallButton">S</button>   </div>
            ))
        }
           </div>

           <br/>

           <h2 >Stocks In Loss</h2>
           <div align="center" class="outsideboxes">
           {
                data.map((Stocksdata, index)  => (
                <div key={index} class="insideboxes"> 
                 
                 <div className='pintopstocks'>{Stocksdata.sid}
                 &nbsp;&nbsp;
                 {Stocksdata.sname}
                 </div>
                 
                 <button class="BuySmallButton">B</button> <button class="SellSmallButton">S</button>   </div>
            ))
        }
           </div>


           <br/>

           <h2 >Most Bought on our Website</h2>
           <div align="center" class="outsideboxes">
               <div  class="insideboxes" >     <button class="BuySmallButton">B</button> <button class="SellSmallButton">S</button>   </div>
               <div  class="insideboxes">      <button class="BuySmallButton">B</button> <button class="SellSmallButton">S</button>   </div>
               <div  class="insideboxes">      <button class="BuySmallButton">B</button> <button class="SellSmallButton">S</button>   </div>
           </div>
       </div>
       <div class="sub-main-div">
       <div class="verticalbox">
           <h2 >Trending</h2>
           <div align="center" class="outsideboxes"> 
               <div  class="insideboxes">      <button class="BuySmallButton">B</button> <button class="SellSmallButton">S</button>   </div>
               <div  class="insideboxes">      <button class="BuySmallButton">B</button> <button class="SellSmallButton">S</button>   </div>
               <div  class="insideboxes">      <button class="BuySmallButton">B</button> <button class="SellSmallButton">S</button>   </div>
               <div  class="insideboxes">      <button class="BuySmallButton">B</button> <button class="SellSmallButton">S</button>   </div>
               <div  class="insideboxes">      <button class="BuySmallButton">B</button> <button class="SellSmallButton">S</button>   </div>
               <div  class="insideboxes">      <button class="BuySmallButton">B</button> <button class="SellSmallButton">S</button>   </div>
               <div  class="insideboxes">      <button class="BuySmallButton">B</button> <button class="SellSmallButton">S</button>   </div>
               <div  class="insideboxes">      <button class="BuySmallButton">B</button> <button class="SellSmallButton">S</button>   </div>
               <div  class="insideboxes">      <button class="BuySmallButton">B</button> <button class="SellSmallButton">S</button>   </div>
               <div  class="insideboxes">      <button class="BuySmallButton">B</button> <button class="SellSmallButton">S</button>   </div>
               <div  class="insideboxes">      <button class="BuySmallButton">B</button> <button class="SellSmallButton">S</button>   </div>
           </div>
       </div>
       </div>
   </div>
    </div>
  )
}
