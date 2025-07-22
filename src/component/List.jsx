import React, { useState } from 'react'

function List() {
    const prodects = [
        { id: 1, name: "laptop", Brand: "dell", quantity: 1 },
        { id: 2, name: "laptop", Brand: "dell", quantity: 1 },
        { id: 3, name: "laptop", Brand: "dell", quantity: 1 }
    ]
    const [count, setCount] = useState()




    return (
        <div>
            {prodects.map((prodect) => (
                <div key={prodect.id}>
                    <h1>{prodect.name}</h1>
                    <h3>Brand:{prodect.Brand}</h3>
                    <h4>Qty:{prodect.quantity}</h4>
                    <button > + </button>
                </div>

            ))}
        </div>
    )

}
export default List
