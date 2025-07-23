import React from 'react'
import "./formInput.css"


function InputCOmponent(prop) {
    return (
        <div>
            <label>Username</label>
            <input placeholder={prop.placeholder} onChange={e=>prop.setUsername(e.target.value)}/>
        </div>
    )
}

export default InputCOmponent