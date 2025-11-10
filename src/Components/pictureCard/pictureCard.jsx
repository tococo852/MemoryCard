
import { useState } from "react"

const PictureCard=({canContinue, setCanContinue,reset,setReset,picture})=>{
    const [beenClicked, setBeenClicked]=useState(false)
    const clickHandler=(e)=>{
        
    }
    return <>
        <button type="button"
        onClick={clickHandler}>
            click me im {picture}
        </button>
        </>

}

export {PictureCard}