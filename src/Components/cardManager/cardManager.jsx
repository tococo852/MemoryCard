
import { useEffect, useState } from "react"
import { PictureCard } from "../pictureCard/pictureCard"

const CardManager=({
    currentScore,
    setCurrentScore,
    maxScore,
    setMaxScore

    })=>{

    const newMaxScore=()=>{
        if (currentScore>maxScore){
            setMaxScore(currentScore)
        }
    }



    useEffect(()=>{
        newMaxScore()

    }, [currentScore])

    const pictures=[0,1,2,3,4,5,6,7,8,9]

    const [reset, setReset]=useState(false)
    const [iteration, setIteration]=useState(0)
    const [cardDisplay, setCardDisplay]=useState(()=>{
        return pictures.map((pic,index)=>(
                    <PictureCard
                        key={index}
                        setCurrentScore={setCurrentScore}
                        reset={reset}
                        setReset={setReset}
                        picture={pic}
                        setIt={setIteration}

                    />       
                ))
    })

    const reArrange=(cards)=>{
        let newcards=[...cards].reverse(); // or shuffle, slice, etc.  
        return newcards
        }


    useEffect(()=>{
        setCardDisplay(reArrange(cardDisplay))
    }, [iteration])

useEffect(() => {
  console.log("Reset changed:", reset);
}, [reset]);
    return <>

            {cardDisplay}
                 
        </>

}

export {CardManager}