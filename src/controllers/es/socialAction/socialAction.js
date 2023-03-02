const socialAction = require('../../../data/es/socialAction-es.json')
const { join } = require('path')
const editor = require('edit-json-file')

const file = editor(join(__dirname, '../../', 'data/about.json'))

const getSocialAction = (req, res, next) => {
  try {
    res.status(200).json(socialAction)
  } catch (error) {
    res.status(500).json({ message: error })
  }
}
exports.getSocialAction = getSocialAction