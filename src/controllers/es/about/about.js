const about = require('../../../data/es/about-es.json')
const { join } = require('path')
const editor = require('edit-json-file')

const file = editor(join(__dirname, '../../', 'data/about.json'))

const getAbout = (req, res, next) => {
  try {
    res.status(200).json(about)
  } catch (error) {
    res.status(500).json({ message: error })
  }
}
exports.getAbout = getAbout