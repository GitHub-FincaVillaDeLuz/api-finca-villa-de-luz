const esAnimalsPlants = require('../../../data/es/animals-plants-es.json')

const { join } = require('path')
const editor = require('edit-json-file')

const file = editor(join(__dirname, '../../', 'data/tours.json'))

const getAnimalsPlants = (req, res, next) => {
  try {
    res.status(200).json(esAnimalsPlants)
  } catch (error) {
    res.status(500).json({ message: error })
  }
}
exports.getAnimalsPlants = getAnimalsPlants