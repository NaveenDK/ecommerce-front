import React ,{useState,useContext}  from "react"
import {Link, Switch} from 'react-router-dom'
import {AppContext} from "../AppContext"


function Header() {

    const {cartItems} = useContext(AppContext)
    function shoppingCart(){
     //   }
    

     if(cartItems.length>0) {
      
         return <i className="ri-shopping-cart-fill ri-fw ri-2x" ></i>
     }
       else  {
        
         return <i className="ri-shopping-cart-line ri-fw ri-2x" ></i>
     }
    }
    return (
        <header>
           <Link to="/"><h2>ImagesOnline</h2></Link> 
    <Link to="/cart">{shoppingCart()}</Link>  
        </header>
    )
}

export default Header
