
import { useState } from "react"
import { useEffect } from "react"

const PictureCard=({reset,setCurrentScore,setReset,picture,reArrange})=>{
    const [firstClick, setFirstClicked]=useState(true)


    const handleReset=()=>{
        if(reset){
            setFirstClicked(true)
            setCurrentScore(0)
            setReset(false)

        }
        
    }
    const clickHandler=(e)=>{
        //never clicked before
        if(firstClick){
            setCurrentScore(prev=>(prev+1))
            setFirstClicked(false)

        }
        //was clicked before
        else{

            setReset(true)
        }
        reArrange()
        
    }
    useEffect(()=>{
        handleReset()
    },[reset] )
    return <>
        <button type="button"
        onClick={clickHandler}>
            click me im {picture}
        </button>
        </>

}

export {PictureCard}