const esPlants = require('../../data/es/plants-es.json')
const enPlants = require('../../data/en/plants-en.json')

const { join } = require('path')
const editor = require('edit-json-file')

const file = editor(join(__dirname, '../../', 'data/tours.json'))

const getPlants = (req, res, next) => {
  try {
    res.status(200).json(esPlants)
  } catch (error) {
    res.status(500).json({ message: error })
  }
}
exports.getPlants = getPlants