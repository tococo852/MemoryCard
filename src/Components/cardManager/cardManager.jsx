
import { useEffect, useState } from "react"
import { PictureCard } from "../pictureCard/pictureCard"

function getRandomInt(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
    }
const shuffle=(arr)=>{
        let tempArr=[...arr]
        let newArray=[]
        let index=0
        let pick=[]

        while(tempArr.length>0){
            index=getRandomInt(0,tempArr.length)
            pick=tempArr.splice(index,1)
            newArray.push(pick[0])

        }
        return newArray
    }
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

    const pictureSet=[0,1,2,3,4,5,6,7,8,9]

    const genPictures=(pictures)=>{
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
    }

    const [reset, setReset]=useState(false)
    const [iteration, setIteration]=useState(0)
    const [cardDisplay, setCardDisplay]=useState(genPictures(shuffle(pictureSet)))



    const reArrange=(cards)=>{
        let newcards=shuffle([...cards]); // or shuffle, slice, etc.  
        return newcards
        }


    useEffect(()=>{
        setCardDisplay(reArrange(cardDisplay))
    }, [iteration])

    useEffect(() => {
    setCurrentScore(0)
    setCardDisplay(genPictures(shuffle(pictureSet)))
    }, [reset]);
    return <>

            {cardDisplay}
                 
        </>

}

export {CardManager}