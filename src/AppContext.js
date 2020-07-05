import React, {useState,useEffect} from "react"
const AppContext = React.createContext()

function AppContextProvider(props){
    const [allPhotos,setAllPhotos] = useState([]);
     

 

    return(
       <AppContext.Provider value={{allPhotos}}>

           {props.children}
       </AppContext.Provider>

   )

}

export {AppContextProvider,AppContext}