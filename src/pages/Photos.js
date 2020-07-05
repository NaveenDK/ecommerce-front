import React, {useContext} from "react"

import Image from "../components/Image"
import {AppContext} from "../AppContext"
import {getClass} from "../utils"

function Photos() {
    const {allPhotos} = useContext(AppContext)
    //console.log("This is appcontext "+useContext(AppContext))
    
    const imageElements = allPhotos.map((img, i) => (
        <Image key={img.id} img={img} className={getClass(i)} />
    ))
    
    return (
        <main className="photos">
            {imageElements}
        </main>
    )
}

export default Photos