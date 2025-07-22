import React, { useEffect, useState } from 'react'

function Title() {
  const [count,setCounter]=useState(0);
  const [color,setcolor]=useState('green');
  useEffect(()=>{
    document.title=`count:${count} ${color}`;
  },[count,color] )
  function eventHandler(){
     setCounter( count +1)
  }
  function substract(){
     setCounter( count -1)
  }
  function changeColor(){
    setcolor(color =>color==='green'?'red':'green')
  }
  return (
    <div>
      <p style={{color:color}}>count:{count}</p>
      <button onClick={eventHandler}>Add</button>
      <button onClick={substract}>Substract</button><br />
      <button onClick={changeColor}>Change color</button>
    </div>
  )
}

export default Title