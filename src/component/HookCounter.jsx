import React, { useState } from 'react'
import Loggedin from './Loggedin'
import NotLoggedin from './NotLoggedin'


function HookCounter() {
  const [count,setCount]=useState(0);

  function handler(){
    setCount ((pre)=>pre+1);
    setCount ((pre)=>pre+1);
    console.log('render');
    
  }

  return (
    <div>
        <button onClick={handler}>{count}</button>
    </div>
  )
}

export default HookCounter