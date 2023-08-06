import React from 'react'
import  { useContext } from 'react'
import { globalstate } from './App'
function Cart() {
  const{item} = useContext(globalstate)

  
  return (
    <div>
      <div className='container1'>
        {
          item.map((result,index)=>{
            return(
            <div className='box1' key={index}>
                <div className='pic'>
                     <img src={result.image} alt=''/>
                </div>
                <div className='content'>
                <h1>{result.title}</h1>
                <p>{result.category}</p>
                <p>${result.price}</p>
                <input type="number" id="quantity" name="quantity" readOnly min="1" max="1" />
                 <a href=" " className='delete-btn'>Delete</a>
                </div>
            </div>
            )
          })
        }

        </div>
    </div>
  )
}

export default Cart
