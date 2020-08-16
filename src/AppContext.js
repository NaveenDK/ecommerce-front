import React, {useState,useEffect} from "react"
const AppContext = React.createContext()

function AppContextProvider(props){
    const [allPhotos,setAllPhotos] = useState([]);
     const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    useEffect(()=>{
        //Get the data from the api 
        //save the data to state
        fetch(url)
        .then(res=>res.json())
        .then(data => setAllPhotos(data))

    },[])
  
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
       <AppContext.Provider value={{allPhotos, toggleFavorite}}>

           {props.children}
       </AppContext.Provider>

   )

}

export {AppContextProvider,AppContext}