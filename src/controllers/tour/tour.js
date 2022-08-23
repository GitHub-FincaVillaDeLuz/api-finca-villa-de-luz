const tours = require('../../data/es/tours-es.json')
const { join } = require('path')
const editor = require('edit-json-file')

const file = editor(join(__dirname, '../../', 'data/tours.json'))

const getTours = (req, res, next) => {
  try {
    res.status(200).json(tours)
  } catch (error) {
    res.status(500).json({ message: error })
  }
}
exports.getTours = getTours