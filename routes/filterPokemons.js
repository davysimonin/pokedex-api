const express = require('express')
const router = express.Router()
const Pokemon = require('../schemas/Pokemon')

router.post('/', async (req, res, next) => {
  console.log(req.body)
  const physicalFilter = {}
  let typesFilter = {}
  let searchFilter = ''
  const statsFilter = {}
  const { search, types, physical, stats } = req.body
  if (search.length) {
    searchFilter = { name: { $regex: search, $options: 'i' } }
  }
  if (physical.length) {
    physical.forEach(filter => (physicalFilter[filter] = -1))
  }
  if (types.length) {
    typesFilter = { types: { $all: types } }
  }
  if (stats.length) {
    stats.forEach((stat) => {
      statsFilter[stat] = -1
    })
  }
  // const nextUrl = `api/fetchpokemons?skip=${skipParam + limitParam}&limit=${limitParam}`

  const findQuery = { ...searchFilter, ...typesFilter }
  const sortQuery = { ...statsFilter, ...physicalFilter }

  const query = Pokemon.find(findQuery).sort(sortQuery)

  const response = await query.exec()
  res.json(response)
})

module.exports = router
