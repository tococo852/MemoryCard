import { useState } from "react"

 const PictureImport = async()=>{

    let pokelist=['lopunny','gardevoir','delphox']
    let spritelist=[]

    let pokemon='ditto'
    let pokeData= await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    let spriteData= await pokeData.json()
    let spriteImg= spriteData.sprites.front_default

    return spriteImg

}

console.log(  PictureImport())

export{PictureImport}