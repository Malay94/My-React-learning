import React, { useEffect, useState } from 'react'

export default function Api2() {
  const [data , setData]= useState([]);
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(response=>response.json())
    .then(data => setData(data));
  })

  return (
    <div>
      <ul>
        {data.map(myData =>(<li>key={myData.title} <img src={myData.image}></img></li>))}
      </ul>
    </div>
  )
}
