const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const Pokemon = require('../schemas/Pokemon.js');

router.get('/', function(req, res, next) {
  let counter = 1;

  const fetchPokemon = () => {
    if (counter > 151) {
      clearInterval(intervalID)
      console.log('ALL DONE')
      return
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)
    .then(res => res.json())
    .then((pokemon) => {
      const newPokemon = new Pokemon(pokemon)
      newPokemon.save(err => {
        if (err) {
          console.error(err)
          clearInterval(intervalID)
          return
        }
      })
      console.log(`${pokemon.name} added`);
      counter++
    })
    .catch(err => {
      console.error(err)
      clearInterval(intervalID)
    })
  }
  const intervalID = setInterval(fetchPokemon, 1000)
});

module.exports = router;
