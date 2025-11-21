
 const PictureImport = async()=>{

    let pokelist=['lopunny','gardevoir','delphox',
        'gothitelle', 'meloetta-aria','lurantis',
        'tsareena','hattrem', 'pheromosa','roserade'
    ]
    let spritelist=[]

    pokelist.map(async pokemon=>{
        console.log(pokemon)
        let pokeData= await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        let spriteData= await pokeData.json()
        let spriteImg= spriteData.sprites.front_shiny
        spritelist.push(spriteImg)


    })

    console.log(  spritelist)

    return spritelist

}


export{PictureImport}