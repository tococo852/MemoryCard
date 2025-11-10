
import { useState } from "react"
import { PictureCard } from "../pictureCard/pictureCard"

const CardManager=({
    canContinue, 
    setCanContinue,
    currentScore,
    setCurrentScore,
    maxScore,
    setMaxScore

    })=>{

    const pictures=[0,1,2,3,4,5,6,7,8,9]

    const [reset, setReset]=useState(false)

    return <>

            {
                pictures.map((pic,index)=>(
                    <PictureCard
                        key={index}
                        canContinue={canContinue}
                        setCanContinue={setCanContinue}
                        setCurrentScore={setCurrentScore}
                        reset={reset}
                        setReset={setReset}
                        picture={pic}
                    />       
                ))
            }
                 
        </>

}

export {CardManager}