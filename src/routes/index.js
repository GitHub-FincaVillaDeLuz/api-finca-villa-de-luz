const { Router } = require('express')
const router = Router()

//Routes Spanish
const home = require('../controllers/es/home/home')
const tour = require('../controllers/es/tour/tour')
const food = require('../controllers/es/food/food')
const plant = require('../controllers/es/plant/plant')
const animal = require('../controllers/es/animal/animal')
const processes = require('../controllers/es/process/process')

//Routes English


router.get('/', (req, res) => {
  res.json({
    Title: 'API Finca AgroTurística Villa de Luz',
  })
})

//Home

router.get('/home', home.getHome)
router.put('/home', home.putHome)

//Tour

router.get('/tours', tour.getTours)

//Foods

router.get('/foods', food.getFoods)

//Plants

router.get('/plants', plant.getPlants)

//Animals

router.get('/animals', animal.getAnimals)

//Processes

router.get('/processes', processes.getProcesses)

module.exports = router
