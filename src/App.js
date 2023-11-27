import React, { useEffect, useState,useRef } from 'react'
import "./App.css"
function App() {
 const [count,setCount]=useState(5);
 const [data,setData]=useState(null);
function DataFetch(){
fetch(`https://randomuser.me/api/?results=${count}`).then(res =>
    res.json()).then(d => {
        setData(d.results);
    });
}

  return (
    <>
      <div className='app'>
        <div className='Input'>
          <div className='Logo'>Fetch</div>
          <div className='fetch-container'>
        <select className="dropdown" onChange={(e)=>{
          setCount(Number(e.target.value));
        }}>
    <option value="5">5</option>
    <option value="10">10</option>
    <option value="20" >20</option>
    <option value="50" >50</option>
    <option value="100" >100</option>
  </select>
        <button className='Fetch' onClick={DataFetch}>Fetch</button>
        </div>
        </div>
        <div className='Table'>
          <table>
            <tr>
              <th>City</th>
              <th>State</th>
              <th>Country</th>
              <th>PostCode</th>
              <th>Street Number</th>
              <th>Name</th>
              <th>Latitude</th>
              <th>Longitude</th>
            </tr>
            {data!=null&&(        
              data.map((item,index)=>{
                return    <tr>
                <td>{item.location.city}</td>
                <td>{item.location.state}</td>
                <td>{item.location.country}</td>
                <td>{item.location.postcode}</td>
                <td>{item.location.street.number}</td>
                <td>{item.location.street.name}</td>
                <td>{item.location.coordinates.latitude}</td>
                <td>{item.location.coordinates.longitude}</td>
              </tr>;
                })
              )}
          </table>
        
        </div>
      </div>
    </>
  )
}

export default App
