const express = require('express')
const cors = require('cors')
const { join } = require('path')
const bodyParser = require('body-parser')

const routes = require('./src/routes/index.js')

const app = express()
app.set('port', process.env.PORT || 8080)

app.use(cors({ origin: '*' }))
app.use(bodyParser.json())
app.use('/api', routes)
app.use(express.static(join(__dirname, 'src/images')))

app.listen(app.get('port'), () => {
  console.log(`Server listening on port http://localhost:${app.get('port')}`)
})

app.use(require('./src/routes/index'))
