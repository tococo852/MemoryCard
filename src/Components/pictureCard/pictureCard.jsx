
import { useState } from "react"
import { useEffect } from "react"

const PictureCard=({reset,setCurrentScore,setReset,picture, setIt})=>{
    const [firstClick, setFirstClicked]=useState(true)


    const handleReset=()=>{
        if(reset){
            console.log('happens')
            setFirstClicked(true)
            setCurrentScore(0)
            setReset(false)

        }
        
    }
    const clickHandler=()=>{

        //never clicked before
        if(firstClick){
            setCurrentScore(prev=>(prev+1))
            setFirstClicked(false)

        }
        //was clicked before
        else{
            setReset(true)
        }
        setIt((prev)=>prev+1)
        
    }
    useEffect(()=>{
        handleReset()
    },[reset] )
    return <>
        <button type="button"
        onClick={clickHandler}>
            <img src={picture} alt="" style={{height: 200, width: 200}}/>
        </button>
        </>

}

export {PictureCard}