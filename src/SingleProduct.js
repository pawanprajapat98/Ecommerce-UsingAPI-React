import axios from 'axios'
import React, { useEffect,useState,useContext} from 'react'
import { useParams } from 'react-router-dom'
import { globalstate } from './App'


function SingleProduct() {
    const [singleproduct,setsingleproduct]=useState([])
    const {item,setitem}=useContext(globalstate)
    const obj=useParams()
    console.log(obj)
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/` + obj.id).then((Resolve)=>{
            console.log(Resolve.data);
            setsingleproduct(Resolve.data)
        })
    },[])

    function handalcart(e,Result){
      console.log(Result)
      setitem([...item, Result])
  
      e.preventDefault()
      
  
     }
  return (
    <div>
          <div id='Container'>
          
            
                <div className='boxe' >
                  <div className='imgs'>
                 <img src={singleproduct.image} alt=''></img>
                 </div>
                  <div className='detail'>
                  {/* <h1>{singleproduct.category}</h1> */}
                  <h1>{singleproduct.title}</h1>
                  <p> ${singleproduct.price}</p>
                  <p>{singleproduct.description}</p>
                  <a href="" className='btn2' onClick={(e)=>handalcart(e,singleproduct)} >Add to cart</a>
                  </div>

              </div>
           
          
          </div> 
    </div>
  )
}

export default SingleProduct
