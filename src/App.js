import React, { createContext, useState } from 'react'
import Header from './Header'
import Products from './Products'
import Cart from './Cart'
import SingleProduct from './SingleProduct'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Newproduct from './Newproduct'
export  const globalstate=createContext({})
function App() {
  const [item,setitem]=useState([])
  
  return (
    <div>
      <>

     
        <BrowserRouter>
           
              <globalstate.Provider value={{item,setitem}}>
                  <Header/>
                    <Routes>
                      <Route path='/' element={<Products/>}></Route>
                      <Route path='/cart' element={<Cart/>}></Route>
                       {/* <Route path='/SingleProduct/' element={<SingleProduct/>}></Route>  */}
                       <Route path='/Product' element={<Newproduct/>}>
                                <Route index element={<Products/>}></Route>
                                <Route path=':id' element={<SingleProduct/>}></Route>
                       </Route>
                      </Routes>
                    </globalstate.Provider>
            </BrowserRouter>
         
    </>
    </div>
  )
}

export default App

