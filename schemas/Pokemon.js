const mongoose = require('mongoose')

const PokemonSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  name: { type: String, unique: true },
  sprites: { type: Object },
  height: { type: Number },
  weight: { type: Number },
  types: { type: Array }
}, { collection: 'pokemons' })

module.exports = mongoose.model('Pokemon', PokemonSchema)
