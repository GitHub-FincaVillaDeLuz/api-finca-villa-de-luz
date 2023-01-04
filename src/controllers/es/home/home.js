const home = require('../../data/es/home-es.json')
const db = require('../../data/index')

const getHome = (req, res, next) => {
  try {
    res.status(200).json(home)
  } catch (error) {
    res.status(500).json({ message: error })
  }
}
exports.getHome = getHome

const putHome = (req, res, next) => {
  try {
    let content = req.body
    let query = 'CALL sp_UPDATE_HOME(?, ?, ?)'
    let params = [content.history, content.mission, content.vision]
    const connection = db.getConnection()
    connection.query(query, params, (error, results) => {
      if (error) {
        throw error
        return
      }
    })
    connection.end()
    res.status(200).json(content)
  } catch (error) {
    res.status(500).json({ message: error })
  }
}
exports.putHome = putHome


const getHomeImage = (req, res, next) => {
  try {
    fs.readFile('../../images/xbarra.png', function(err, data) {
      if (err) throw err; // Fail if the file can't be read.
      else {
        res.writeHead(200, {'Content-Type': 'image/jpeg'});
        res.end(data); // Send the file data to the browser.
      }
    });
  }catch(error){
    res.status(500).json({'response': error})
  }
}
exports.getHomeImage = getHomeImage

