const express = require('express')
const router = express.Router()
// const fetch = require('node-fetch')
// const Pokemon = require('../schemas/Pokemon.js')

router.get('/', (req, res) => {
  // Block pokeScript from being used again
  return res.send('Nope')

  // let counter = 152
  //
  // const fetchPokemon = () => {
  //   if (counter > 251) {
  //     clearInterval(intervalID)
  //     console.log('ALL DONE')
  //     res.end()
  //     return
  //   }
  //
  //   fetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)
  //   .then(res => res.json())
  //   .then((pokemon) => {
  //     pokemon.types = pokemon.types.map(el => el.type.name).reverse()
  //     const newPokemon = new Pokemon(pokemon)
  //     newPokemon.save(err => {
  //       if (err) {
  //         console.error(err)
  //         clearInterval(intervalID)
  //         return
  //       }
  //     })
  //     console.log(`${pokemon.name} added`);
  //     console.log(newPokemon)
  //     counter++
  //   })
  //   .catch(err => {
  //     console.error(err)
  //     clearInterval(intervalID)
  //   })
  // }
  // const intervalID = setInterval(fetchPokemon, 1500)
})

module.exports = router
