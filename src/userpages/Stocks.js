import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Stocks() {
    const [data, setData] = useState({ top_gainers: [], stocks_in_loss: [], most_bought: [] });
    const [trendingStocksData, setTrendingStocksData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=YWK4OX6UV23LZ8IB");
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

    useEffect(() => {
        // Fetch trending stocks data
        // Example: const response = await axios.get("TRENDING_STOCKS_API_ENDPOINT");
        // setTrendingStocksData(response.data);
    }, []);

    return (
        <div>
            {document.title = "Stocks"}
            <div className="main-div">
                <div>
                    <h2>Top Stocks</h2>
                    <div align="center" className="outsideboxes">
                        {data.top_gainers.map((stock, index) => (
                            <div key={index} className="insideboxes">
                                <div className='pintopstocks'>
                                    &nbsp;&nbsp; {stock.ticker}
                                </div>
                                <div className="button-container">
                                    <button className="BuySmallButton">Buy</button>
                                    <button className="SellSmallButton">Sell</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <br />
                    <h2>Stocks In Loss</h2>
                    <div align="center" className="outsideboxes">
                        {data.stocks_in_loss.map((stock, index) => (
                            <div key={index} className="insideboxes">
                                <div className='pintopstocks'>
                                    &nbsp;&nbsp; {stock.ticker}
                                </div>
                                <div className="button-container">
                                    <button className="BuySmallButton">Buy</button>
                                    <button className="SellSmallButton">Sell</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <br />
                    <h2>Most Bought on our Website</h2>
                    <div align="center" className="outsideboxes">
                        {data.most_bought.map((stock, index) => (
                            <div key={index} className="insideboxes">
                                <div className='pintopstocks'>
                                    &nbsp;&nbsp; {stock.ticker}
                                </div>
                                <div className="button-container">
                                    <button className="BuySmallButton">Buy</button>
                                    <button className="SellSmallButton">Sell</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="sub-main-div">
                    <div className="verticalbox">
                        <h2>Trending</h2>
                        <div align="center" className="outsideboxes">
                            {trendingStocksData.map((trendingStock, index) => (
                                <div key={index} className="insideboxes">
                                    <div className='pintopstocks'>
                                        &nbsp;&nbsp; {trendingStock.ticker}
                                    </div>
                                    <div className="button-container">
                                        <button className="BuySmallButton">Buy</button>
                                        <button className="SellSmallButton">Sell</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}