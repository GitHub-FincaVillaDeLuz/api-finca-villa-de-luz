const esfoods = require('../../../data/es/foods-es.json')
const enfoods = require('../../../data/en/foods-en.json')

const { join } = require('path')
const editor = require('edit-json-file')

const file = editor(join(__dirname, '../../', 'data/tours.json'))

const getFoods = (req, res, next) => {
  try {
      res.status(200).json(esfoods)
  } catch (error) {
    res.status(500).json({ message: error })
  }
}
exports.getFoods = getFoods