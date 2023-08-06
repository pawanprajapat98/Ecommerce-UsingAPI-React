import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { globalstate } from './App'
import { Link } from 'react-router-dom'
function Products() {
   const [data,setdata]=useState([])
   const {item,setitem}=useContext(globalstate)
    console.log(item)
   useEffect(()=>{
      axios.get("https://fakestoreapi.com/products/").then((Resovle)=>{
         console.log(Resovle.data)
         setdata(Resovle.data)
      })
   },[])
   function handalClick(e,Result){
    console.log(Result)
    setitem([...item, Result])

    e.preventDefault()
    
   
   }
   function trimtitle(title){
     return(title.length>20)?title.slice(0,20)+"...":title;
   }
  return (
    <div>
       <div className='container'>
        {
            data.map((Result,index)=>{
                return(
                    <div className='box' key={index}>
                        <Link to={`/Product/${Result.id}`}><img src={Result.image} alt=''/></Link>
                        <h1><Link to={`/Product/${Result.id}`}>{trimtitle(Result.title)}</Link></h1>
                        <p>${Result.price}</p>
                        <button className='btn' onClick={(e)=>handalClick(e,Result)}>Add to cart</button>
                    </div>
                )
            })
        }
       </div>
    </div>
  )
}

export default Products
