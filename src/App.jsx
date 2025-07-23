import React, { useEffect, useState } from 'react'




function App() {
let [quates,setQuates]=useState([])

useEffect(()=>{
  fetch('https://dummyjson.com/quotes')
  .then(res=>res.json())
  .then((data)=>{
   const first10=data.quotes.slice(0,10)
    setQuates(first10)
    console.log(first10);
    
  
  
    
  })

  .catch((error)=>{
    console.error('error fetching quates:',error)
  })
},[])
  return (
    <div>
      <h2>Top 10 Quates</h2>
      <h1>
      {quates.map((q)=>{
        return <li key={q.id}>{q.quote}</li>
      })}
      </h1>
     
    </div>
  )
}

export default App
