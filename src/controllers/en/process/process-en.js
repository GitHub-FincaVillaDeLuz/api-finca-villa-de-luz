const processes = require('../../../data/en/processes-en.json')
const { join } = require('path')
const editor = require('edit-json-file')

const file = editor(join(__dirname, '../../', 'data/tours.json'))

const getProcesses = (req, res, next) => {
    try {
        res.status(200).json(processes)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}
exports.getProcesses = getProcesses