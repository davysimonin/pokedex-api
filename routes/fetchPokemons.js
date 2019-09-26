const express = require('express')
const router = express.Router()
const Pokemon = require('../schemas/Pokemon')

router.get('/', async (req, res, next) => {
  const { limit, skip } = req.query
  const limitParam = parseInt(limit)
  const skipParam = skip ? parseInt(skip) : 0
  const nextUrl = `api/fetchpokemons?skip=${skipParam + limitParam}&limit=${limitParam}`

  try {
    const pokemons = await Pokemon.find().sort({ id: 1 }).skip(skipParam).limit(limitParam)
    res.json({ nextUrl, pokemons: [...pokemons] })
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router
