import React, { useState, useEffect } from 'react';
import MyStocksdata from './data/trendingstocks.json';
import graphdata from './data/graph.json';
import { Line } from "react-chartjs-2";
import { ChartasChartJS } from 'chart.js/auto';
import './Portfolio.css'

export default function Portfolio() {
  const [count, setCount] = useState(0);
  const [MyStocks, setMyStocks] = useState([]);
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
    let sum = 0;
    MyStocks.map((stock) => {
      sum += parseFloat(stock.current_price);
    });
    let sumofreturn
    setCount(sum);
    setMyStocks(MyStocksdata);
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
  }, [MyStocks]);

  return (
    <div className="portfolio-container">
      <div className="main-div-portfolio">
        <div className="verticalboxportfolio">
          <h2>My Stocks</h2>
          <div align="center" className="outsideboxes">
            {MyStocks.map((Mystock, index) => (
              <div key={index} className="insideboxes">
                <div className="pintopstocks">
                  <h3 >&nbsp;&nbsp; {Mystock.symbol} </h3>
                  <h3 className="font-insideboxes">&nbsp;&nbsp; {Mystock.sname} </h3>
                  <h3 className="font-insideboxes">&nbsp;&nbsp; {Mystock.current_price}</h3>
                  {
                  (Mystock.change_percent>0)?
                  <h3 className="font-insideboxes" style={{color:"rgb(81, 201, 81)"}}>&nbsp;&nbsp; { `${Mystock.change_percent}%`}</h3>:
                      <h3 className="font-insideboxes" style={{color:" rgb(255, 0, 0)"}}>&nbsp;&nbsp; {`${Mystock.change_percent}%`}</h3>
                  }
                  
                  <h3 className="font-insideboxes">&nbsp;&nbsp; {Mystock.sector}</h3>
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
      <div className="sub-main-div-portfolio" style={{marginLeft:"40px"}}>
        <div className="verticalboxportfolio">
          <h2 style={{ marginLeft: "0px" }}>My Graph</h2>
          <div className="outsideboxgraph">
            <Line data={chartData} options={options} />
          </div>
        </div>
        <div className="verticalboxportfolio">
          <h2>Investments</h2>
          <div className="outsideboxinvestments"  style={{alignItems:"center"}}>
            
            <div style={{marginRight:"10px",alignItems:"center"}} >
            <a style={{color:"white",marginLeft:"35px",fontSize:"20px"}}>Invested</a>
            <h1 style={{color:"white",marginLeft:"35px"}}>{`$1907.63`}</h1>
            </div>
            <div>
              <a style={{color:"white",marginLeft:"35px",align:"right",fontSize:"20px"}}>Current Value</a>
              <h1 style={{color:"white",marginTop:"10px",marginLeft:"45px"}}>{ `$${count.toFixed(2)}`}</h1>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
