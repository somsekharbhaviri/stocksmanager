import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './transactions.css'

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
            <div className="main-div" >
                <div>
                    <h2>Recent Transactions</h2>
                    <div align="center" className="outsideboxes" style={{height:"1850px",width:"450px"}} >
                        {data.top_gainers.map((stock, index) => (
                            <div key={index} className="insideboxes"style={{marginTop:"3px",width:"400px",height:"60px", alignTracks:"center"}}>
                                <div className='pintopstocks'style={{marginTop:"20px"}}>
                                <h3 className="font-insideboxes">&nbsp;&nbsp; {`${stock.ticker}`}</h3>
                                <h3 className="font-insideboxes">&nbsp;&nbsp; {`${stock.price}`}</h3>
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
                        <h2 align="left" style={{marginLeft:"570px"}}>Funds</h2>
                        <div align="center" className="outsideboxinvestments" style={{height:"300px",width:"600px"}}>

                        <div style={{width:"60%",height:"auto",marginRight:"280px"}} >
                          <i style={{marginRight:"40px",fontSize:"20px"}}>FUNDS REMAINING</i>
                          <b style={{fontSize:"50px",color:"#02A4FF"}}> 10,000 </b>
                          <div className='insideboxes' style={{marginTop:"50px",width:"200px",height:"40px"}}>
                            <h3 style={{fontSize:"20px",marginTop:"10px",marginLeft:"60px",color:"white"}}>Withdraw</h3>
                          </div>
                          

                        </div>
                        <div   style={{width:"40%",alignItems:'right'}} >
                          <div className='insideboxes' style={{marginTop:"-250px",marginLeft:"120px",width:"250px",height:"250px"}}>
                          <i style={{fontSize:"20px",marginTop:"-200px",marginLeft:"90px"}}>Add Funds</i>
                          <button className='insideboxesbutton' style={{width:"80%",height:"40px",textAlign:'center',marginRight:"10px",marginLeft:"-1000px",marginBlockStart:"-100px"}}>
                            <i style={{fontSize:"13px",marginTop:"100px" ,color:"aqua"}}>NetBanking</i>
                          </button>
                         
                          <button className='insideboxesbutton' style={{width:"80%",height:"40px",textAlign:'center',marginRight:"25px",marginLeft:"-1000px",marginBlockStart:"-100px",marginBlockEnd:"-200px"}}>
                            <i style={{fontSize:"13px",marginTop:"700px",color:"aqua"}}>UPI</i>
                          </button>
                          </div>
                          

                        </div>
                        </div>
                        <div className="verticalbox" align="left" style={{marginTop:"80px"}}> 
                        <div align="center" className="outsideboxinvestments"style={{backgroundColor:"rgba(9.63, 145.40, 154.06, 0.17)",width:"900px",height:"350px"}}>
                         <table>
                          <tr style={{width:"400px"}}>
                          <td style={{textAlign:"center"}}>
                          <div>
                            <b> Available margin </b><br/>
                            <i  style={{color:" rgb(41, 207, 207)"}}> 10,000 </i>
                          </div>
                          </td>
                          <td style={{textAlign:"center",height:"200px"}}>
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