const mongoose = require('mongoose');

const PokemonSchema = new mongoose.Schema({
  id: Number,
  name: String,
  sprites: Object,
  height: Number,
  weight: Number,
  types: Array
}, {collection: 'pokemons'})

module.exports = mongoose.model('Pokemon', PokemonSchema);
