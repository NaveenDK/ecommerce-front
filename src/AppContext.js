import React, {useState,useEffect} from "react"
const AppContext = React.createContext()

function AppContextProvider(props){
    const [allPhotos,setAllPhotos] = useState([]);
    const [cartItems,setCartItems] = useState([]);
     const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    useEffect(()=>{
        //Get the data from the api 
        //save the data to state
        fetch(url)
        .then(res=>res.json())
        .then(data => setAllPhotos(data))

    },[])
  
     function addCartItems(id){

        let updatedCartItems = allPhotos.map(photo=>{
            if(photo.id===id){
                cartItems.push(photo)
                return {
                    cartItems
                   
                }
                console.log("Before the end of if "+cartItems.length)
            }
            console.log("After  the end of if "+cartItems.length)
                 return cartItems
        })
        console.log("After  the end of map "+cartItems.length)
        setCartItems(updatedCartItems)
        console.log(cartItems.length);
     }
     //console.log(allPhotos)
     function toggleFavorite(id){
        let updatedArr = allPhotos.map(photo =>{
            if(photo.id === id){
                console.log(photo.isFavorite)
                return {
                    ...photo,
                    isFavorite:!photo.isFavorite
                }
            }
            return photo
        })
       setAllPhotos(updatedArr)
       
     }

    return(
       <AppContext.Provider value={{allPhotos, toggleFavorite,addCartItems}}>

           {props.children}
       </AppContext.Provider>

   )

}

export {AppContextProvider,AppContext}