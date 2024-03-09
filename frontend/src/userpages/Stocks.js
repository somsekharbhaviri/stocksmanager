import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './stocks.css';

const StocksSection = ({ title, stocks }) => (
  <div className="section">
    <h2>{title}</h2>
    <div className="outsideboxes">
      {stocks.map((stock, index) => (
        <div key={index} className="insideboxes">
          <div className='pintopstocks'>
            <span className="font-insideboxes">{stock.ticker}</span>
            <span className="font-insideboxes">{stock.price}</span>
            <span className="font-insideboxes" style={{ color: stock.change_amount > 0 ? "rgb(81, 201, 81)" : "rgb(255, 0, 0)" }}>
              {stock.change_percentage}
            </span>
          </div>
          <div className="button-container">
            <button className="BuySmallButton">Buy</button>
            <button className="SellSmallButton">Sell</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function Stocks() {
  const [data, setData] = useState({ top_gainers: [], stocks_in_loss: [], most_bought: [] });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=demo");
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
    <div className="main-div">
      {document.title = "Stocks"}
      <div className="left-section">
        <StocksSection title="Top Stocks" stocks={data.top_gainers} />
        <StocksSection title="Stocks In Loss" stocks={data.stocks_in_loss} />
        <StocksSection title="Most Bought on our Website" stocks={data.most_bought} />
      </div>
      <div className="right-section">
        <div className="verticalbox">
          <StocksSection title="Trending" stocks={data.most_bought} />
        </div>
      </div>
    </div>
  );
}
