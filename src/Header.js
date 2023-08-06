import React, { useContext } from 'react'
import { globalstate } from './App'
import { Link } from 'react-router-dom'

function Header() {
    const{item} = useContext(globalstate)
  return (
   <>
      <div className='Header'>
          <h1><Link to='/'>Logo</Link></h1>
          <ul>
            <li><Link to='/'>Product</Link></li>
            <li><Link to='/Cart'>Cart</Link><span>{item.length}</span></li>
            {/* <li><Link to='/SingleProduct'></Link></li> */}
          </ul>
      </div>
   </>
  )
}

export default Header
