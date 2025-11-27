
 const PictureImport = async()=>{

    let pokelist=['lopunny','gardevoir','delphox',
        'gothitelle', 'meloetta-aria','lurantis',
        'tsareena','hattrem', 'pheromosa','roserade'
    ]

    const promiseList= pokelist.map(async pokemon=>{
        //console.log(pokemon)
        let pokeData= await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        let spriteData= await pokeData.json()
        return spriteData.sprites.front_shiny



    })

    console.log( promiseList  )

    return await Promise.all(promiseList)

}


export{PictureImport}