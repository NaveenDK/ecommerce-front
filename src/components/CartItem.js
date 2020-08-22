import React , {useContext,useState} from "react"
import {AppContext} from "../AppContext"
import PropTypes from 'prop-types'
import useHover from "../hooks/useHover"
function CartItem({item}) {
    const [hovered, ref] = useHover()
    const {removeFromCart} = useContext(AppContext)
    //const [ hovered,setHovered] = useState(false)
   
     
    const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"
   
    return (
        <div className="cart-item">
              
         <i onClick={()=>removeFromCart(item.id)}  
             ref={ref}
         className ={iconClassName} 
        ></i>       
                       <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem