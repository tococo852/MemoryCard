import { useEffect, useState } from "react";
import { PictureCard } from "../pictureCard/pictureCard";
import { PictureImport } from "../pictureImport/pictureImport";

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

const shuffle = (arr) => {
    let tempArr = [...arr];
    let newArray = [];
    let index = 0;
    let pick = [];

    while (tempArr.length > 0) {
        index = getRandomInt(0, tempArr.length);
        pick = tempArr.splice(index, 1);
        newArray.push(pick[0]);
    }

    return newArray;
};

const newMaxScore = (currentScore, maxScore, setMaxScore) => {
    if (currentScore > maxScore) {
        setMaxScore(currentScore);
    }
};

const CardManager = ({
    currentScore,
    setCurrentScore,
    maxScore,
    setMaxScore
}) => {



    //const pictureTest = PictureImport();
    //console.log(pictureTest);
    const [reset, setReset] = useState(false);
    const [isLoading, setIsLoading]=useState(true)
    const [iteration, setIteration] = useState(0);
    const [pictures, setPictures] = useState([]);

    useEffect(()=>{
        const load= async()=>{
            const pictureSet = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            setPictures(shuffle(pictureSet))
            setIsLoading(false)
        }
        load()
    },[]);
    // reshuffle on iteration change
    useEffect(() => {
        setPictures(prev => shuffle(prev));
    }, [iteration]);

    // reset game
    useEffect(() => {
        setCurrentScore(0);
        setPictures(prev=>shuffle(prev));
    }, [reset]);

    useEffect(() => {
        newMaxScore(currentScore, maxScore, setMaxScore);
    }, [currentScore]);
    return  (
    isLoading ? (
        <>Loading...</>
    ) : (
        <>
            {pictures.map((pic) => (
                <PictureCard
                    key={pic}
                    setCurrentScore={setCurrentScore}
                    reset={reset}
                    setReset={setReset}
                    picture={pic}
                    setIt={setIteration}
                />
            ))}
        </>
    )
);
};

export { CardManager };
