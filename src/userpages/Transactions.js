import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Transactions() {
    const [data, setData] = useState({ top_gainers: [], stocks_in_loss: [], most_bought: [] });

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=demo");
                console.log(response.data);
                setData({
                    top_gainers: response.data.top_gainers || [],
                    stocks_in_loss: response.data.top_losers || [],
                    most_bought: response.data.most_actively_traded || []
                });
            } catch (err) {
                console.log(err.message);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            {document.title = "Stocks"}
            <div className="main-div">
                <div>
                    <h2>Recent Transactions</h2>
                    <div align="center" className="outsideboxes" style={{height:"650px",width:"450px"}} >
                        {data.top_gainers.map((stock, index) => (
                            <div key={index} className="insideboxes"style={{marginTop:"3px",width:"400px",height:"60px", alignTracks:"center"}}>
                                <div className='pintopstocks'style={{marginTop:"20px"}}>
                                <i className="font-insideboxes">&nbsp;&nbsp; {`${stock.ticker}`}</i>
                                <i className="font-insideboxes">&nbsp;&nbsp; {`${stock.price}`}</i>
                                </div>
                                <div className="button-container">
                                    <button className="BuySmallButton">Buy</button>
                                    <button className="SellSmallButton">Sell</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <br />
                    
                </div>
                <div className="sub-main-div" align="right">
                    <div className="verticalbox" style={{}}>
                        <h2 align="left" style={{marginLeft:"350px"}}>Funds</h2>
                        <div align="center" className="outsideboxinvestments">

                        <div style={{width:"60%"}} >
                          <i style={{fontSize:"20px"}}>FUNDS REMAINING</i>
                          <b style={{fontSize:"50px",color:"#02A4FF"}}> 10,000 </b>
                          <div className='insideboxes' style={{width:"70%",height:"60px"}}>
                            <i style={{fontSize:"20px",marginTop:"100px"}}>Withdraw</i>
                          </div>
                          

                        </div>
                        <div   style={{width:"40%",alignItems:'center'}} >
                          <div className='insideboxes' style={{width:"100%",height:"230px",textAlign:'center'}}>
                          <i style={{fontSize:"20px",marginTop:"100px"}}>Add Funds</i>
                          <button className='insideboxesbutton' style={{width:"80%",height:"40px",textAlign:'center'}}>
                            <i style={{fontSize:"13px",marginTop:"100px"}}>NetBanking</i>
                          </button>
                          <button className='insideboxesbutton' style={{width:"80%",height:"40px"}}>
                            <i style={{fontSize:"13px",marginTop:"100px"}}>UPI</i>
                          </button>
                          </div>
                          

                        </div>
                        </div>
                        <div className="verticalbox" align="left" style={{marginTop:"-100px"}}> 
                        <div align="center" className="outsideboxinvestments"style={{backgroundColor:"rgba(9.63, 145.40, 154.06, 0.17)",width:"900px",height:"350px"}}>
                         <table>
                          <tr>
                          <td style={{textAlign:"center"}}>
                          <div>
                            <b> Available margin </b><br/>
                            <i  style={{color:" rgb(41, 207, 207)"}}> 10,000 </i>
                          </div>
                          </td>
                          <td style={{textAlign:"center"}}>
                          <div>
                            <b> Available margin </b><br/>
                            <i  style={{color:" rgb(41, 207, 207)"}}> 10,000 </i>
                          </div>
                          </td>
                          <td style={{textAlign:"center"}}>
                          <div>
                            <b> Available margin </b><br/>
                            <i  style={{color:" rgb(41, 207, 207)"}}> 10,000 </i>
                          </div>
                          </td>
                          <td style={{textAlign:"center"}}>
                          <div>
                            <b> Available margin </b><br/>
                            <i  style={{color:" rgb(41, 207, 207)"}}> 10,000 </i>
                          </div>
                          </td>
                          <td style={{textAlign:"center"}}>
                          <div>
                            <b> Available margin </b><br/>
                            <i  style={{color:" rgb(41, 207, 207)"}}> 10,000 </i>
                          </div>
                          </td>
                          </tr>
                          <tr>
                            <td style={{textAlign:"center"}}> <div>
                            <b> Available margin </b><br/>
                            <i  style={{color:" rgb(41, 207, 207)"}}> 10,000 </i>
                          </div>
                          </td>
                          <td style={{textAlign:"center"}}>
                          <div>
                            <b> Available margin </b><br/>
                            <i  style={{color:" rgb(41, 207, 207)"}}> 10,000 </i>
                          </div>
                          </td>
                          <td style={{textAlign:"center"}}>
                          <div>
                            <b> Available margin </b><br/>
                            <i  style={{color:" rgb(41, 207, 207)"}}> 10,000 </i>
                          </div>
                          </td>
                          <td style={{textAlign:"center"}}>
                          <div>
                            <b> Available margin </b><br/>
                            <i  style={{color:" rgb(41, 207, 207)"}}> 10,000 </i>
                          </div>
                          </td>
                          <td style={{textAlign:"center"}}>
                          <div>
                            <b> Available margin </b><br/>
                            <i  style={{color:" rgb(41, 207, 207)"}}> 10,000 </i>
                          </div>
                          </td>
                          </tr>
                         </table>
                        </div>
                    </div>
                    
                    </div>
                </div>
            </div>
        </div>
    );
}