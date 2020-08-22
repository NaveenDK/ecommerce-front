import React, {useContext,useState, useEffect} from "react"
import {AppContext} from "../AppContext"
import CartItem from "../components/CartItem"

function Cart() {
    const {cartItems,cartEmpty} = useContext(AppContext)
    const [btnText,setbtnText ] = useState("Place Order")
    const totalCost = 5.99* cartItems.length
    const totalCostDisplay = totalCost.toLocaleString("en-Us",{style:"currency", currency:"USD"})
    const cartItemElements = cartItems.map(item => (
       <CartItem key={item.id} item={item}/>
    ))
    
  //  const changeText  = (text) => setButtonText(text)
function placeOrder(){
    setbtnText("Ordering..")
    setTimeout(function(){ 
        console.log("order-placed!!")
        cartEmpty(); setbtnText(" Go Home!")
    }, 3000)
}
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCostDisplay}</p>
            { cartItems.length>0? 
            <div className="order-button">
           <button onClick={()=>placeOrder()} > {btnText}</button>
            </div>: <p> No items</p>}
        </main>
    )
}

export default Cart