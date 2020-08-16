import React, {useState,useContext} from "react"
import {AppContext} from "../AppContext"
import PropTypes from 'prop-types'

function Image({className, img}) {
    const [ hovered,setHovered] = useState(false)
    //const [isFavorited,setIsFavorited] = useState(false)
    const {toggleFavorite,addToCart,cartItems} = useContext(AppContext)

    function heartIcon() {
        if(img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => 
             toggleFavorite(img.id)}></i>
        } else if(hovered) {
            return <i className="ri-heart-line favorite" onClick={() => 
              toggleFavorite(img.id)}></i>
        }
    }
    function onClickHandler()
    {console.log("executed the onclick handler")
        return <i className="ri-add-circle-line cart" onClick={()=>addToCart(img)}></i>
        //console.log("executed the onclick handler")
    }
    function cartIcon(){
        // if (cartItems.filter(function(e) { return e.id === img.id; }).length > 0) {
        //     return <i className="ri-shopping-cart-fill cart" onClick={()=>addToCart(img)}></i>
        //   }
        const alreadyInCart = cartItems.some(item => item.id === img.id)
        if(alreadyInCart) {
            console.log("test alreadyCart");
            return <i className="ri-shopping-cart-fill cart" onClick={()=>onClickHandler}></i>
        }
          else if(hovered) {
            console.log("testaddtoCart hovered if condition");
            return <i className="ri-add-circle-line cart" onClick={()=>addToCart(img)}></i>
        }
    }
    

    //const heartIcon =  hovered &&   <i className="ri-heart-line favorite" 
    //onClick={() => toggleFavorite(img.id)}></i>
    //const cartIcon =  hovered &&   <i className="ri-add-circle-line cart" onClick={()=>addToCart(img)}></i> 

    return (
        <div className={`${className} image-container`}
             onMouseEnter={()=>setHovered(true)}
             onMouseLeave={()=>setHovered(false)}
        >
            <img src={img.url} className="image-grid"/>
               {heartIcon()}
              {cartIcon()}
        </div>
    )
}

Image.propTypes={
    className: PropTypes.string,
    img:PropTypes.shape({
        id:PropTypes.string.isRequired,
        url:PropTypes.string.isRequired,
        isFavorite:PropTypes.bool
    })
}

export default Image
