import React, { useState, useEffect } from 'react';
import MyStocksdata from './data/trendingstocks.json';
import graphdata from './data/graph.json';
import { Line } from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto';

export default function Portfolio() {
  const [MyStocks, SetMyStocks] = useState([]);
  const [chartData, setChartData] = useState({
    labels: graphdata.map((data) => data.year), // X-axis labels
    datasets: [
      {
        label: "Users gained",
        data: graphdata.map((data) => data.userGain),
        // Add any additional dataset properties here if needed
      },
    ],
  });
  const options = {
    scales: {
      
      x: {
        ticks: {
          color: 'white' // Solid white color for x-axis labels
        }
      },
      y: {
        ticks: {
          color: 'white' // Solid white color for y-axis labels
        }
      }
    }
  };
  useEffect(() => {
    SetMyStocks(MyStocksdata);
    // Update only the datasets property, keep labels intact
    setChartData(prevState => ({
      ...prevState,
      datasets: [
        {
          ...prevState.datasets[0], // Keep existing dataset properties
          data: graphdata.map((data) => data.userGain), // Update data property
        },
      ],
    }));
  }, []);

  return (
    <div className="portfolio-container">
      <div className="main-div-portfolio">
        <div className="verticalboxportfolio">
          <h2>Trending</h2>
          <div align="center" className="outsideboxes">
            {MyStocks.map((Mystock, index) => (
              <div key={index} className="insideboxes">
                <div className="pintopstocks">
                  <i >&nbsp;&nbsp; {Mystock.symbol} </i>
                  <i className="font-insideboxes">&nbsp;&nbsp; {Mystock.sname} </i>
                  <i className="font-insideboxes">&nbsp;&nbsp; {Mystock.current_price}</i>
                  <i className="font-insideboxes">&nbsp;&nbsp; {Mystock.change_percent}</i>
                  <i className="font-insideboxes">&nbsp;&nbsp; {Mystock.sector}</i>
                </div>
                <div className="button-container-portfolio">
                  <button className="BuySmallButton">Buy</button>
                  <button className="SellSmallButton">Sell</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="sub-main-div-portfolio">
        <div className="verticalboxportfolio">
          <h2 style={{marginLeft:"0px"}}>My Graph</h2>
          <div className="outsideboxgraph">
          <Line data={chartData} options={options} />
          </div>
        </div>
        <div className="verticalboxportfolio">
          <h2>Investments</h2>
          <div className="outsideboxinvestments">
            
          </div>
        </div>
      </div>
    </div>
  );
}
