
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

    const reArrange=()=>{
        console.log('working')
        cards=[...cards].reverse(); // or shuffle, slice, etc.    
        }
    let cards=pictures.map((pic,index)=>(
                    <PictureCard
                        key={index}
                        setCurrentScore={setCurrentScore}
                        reset={reset}
                        setReset={setReset}
                        picture={pic}
                        reArrange={reArrange}
                    />       
                ))


    return <>

            {cards}
                 
        </>

}

export {CardManager}