import React , {useContext,useState} from "react"
import {AppContext} from "../AppContext"

function CartItem({item}) {
 
    const {removeFromCart} = useContext(AppContext)
    const [ hovered,setHovered] = useState(false)
     
    const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"
   
    return (
        <div className="cart-item">
              
         <i onClick={()=>removeFromCart(item.id)}  
              onMouseEnter={()=>setHovered(true)}
              onMouseLeave={()=>setHovered(false)}
         className ={iconClassName} 
        ></i>       
                       <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

export default CartItem