import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ViewStockMembers() {
  const [stockmembers, setStockMembers] = useState([]);

  const fetchStockMembers = async () => {
    try {
      const response = await axios.get('http://localhost:2065/viewstockmembers');
      setStockMembers(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchStockMembers();
  }, []);

  const deletestockpurchaser = async (email) => {
    try {
      await axios.delete(`http://localhost:2065/deletestockpurchaser/${email}`);
      fetchStockMembers();
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Srock Members</h1>
      
      <table border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Pan Number</th>
              <th>Bank Name</th>
              <th>contact</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
  {Array.isArray(stockmembers) && stockmembers.length > 0 ? (
    stockmembers.map((stockmember, index) => (
      <tr key={index}>
        <td>{stockmember.name}</td>
        <td>{stockmember.age}</td>
        <td>{stockmember.email}</td>
        <td>{stockmember.panno}</td>
        <td>{stockmember.banknme}</td>
        <td>{stockmember.contact}</td>
        <td>
          <button onClick={() => deletestockpurchaser(stockmember.email)} className='button'>Delete</button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="7">Data Not Found</td>
    </tr>
  )}
</tbody>
        </table>
    </div>
  );
}
