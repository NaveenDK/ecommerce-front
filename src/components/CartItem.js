import React , {useContext} from "react"
import {AppContext} from "../AppContext"

function CartItem({item}) {
 
    const {removeFromCart} = useContext(AppContext)

    return (
        <div className="cart-item">
            <i onClick={()=>removeFromCart(item.id)} className="ri-delete-bin-line"></i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

export default CartItem