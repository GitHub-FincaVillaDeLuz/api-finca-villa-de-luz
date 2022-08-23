const animals = require('../../data/es/animals-es.json')
const { join } = require('path')
const editor = require('edit-json-file')

const file = editor(join(__dirname, '../../', 'data/tours.json'))

const getAnimals = (req, res, next) => {
  try {
    res.status(200).json(animals)
  } catch (error) {
    res.status(500).json({ message: error })
  }
}
exports.getAnimals = getAnimals