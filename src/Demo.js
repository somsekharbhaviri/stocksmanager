import React, { useEffect } from 'react'
import axios from 'axios';

export default function Demo() 
{
    const [data, setData] = React.useState({results: []});
    const [error, setError] = React.useState(null);

    const fetchdata = async () => { 
        try {
            const response = await axios.get('https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-01-09/2023-01-09?adjusted=true&sort=asc&limit=120&apiKey=mCXKQpG6psPQjLuZVUT1vmz48bUXwTex');
            setData(response.data);
        } catch (error) {
            setError(error);
        }
    }

   useEffect(() => {
        fetchdata()
   }, [])
   


  return (
    <div>
    {
       <h3 color='red'>{data.ticker}</h3>
    }
    </div>
  )
}
