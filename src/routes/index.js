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
const homeEN = require('../controllers/en/home/home-en')
const tourEN = require('../controllers/en/tour/tour-en')
const foodEN = require('../controllers/en/food/food-en')
const plantEN = require('../controllers/en/plant/plant-en')
const animalEN = require('../controllers/en/animal/animal-en')
const processesEN = require('../controllers/en/process/process-en')


router.get('/', (req, res) => {
  res.json({
    Title: 'API Finca AgroTurística Villa de Luz',
  })
})

/////////////////////////////////////////////////////////////// SPANISH

//HomeES
router.get('/home', home.getHome)
router.put('/home', home.putHome)

//TourES
router.get('/tours', tour.getTours)

//FoodsES
router.get('/foods', food.getFoods)

//PlantsES
router.get('/plants', plant.getPlants)

//Animals ES

router.get('/animals', animal.getAnimals)

//Processes ES
router.get('/processes', processes.getProcesses)

/////////////////////////////////////////////////////////////// ENGLISH

//HomeEN
//router.get('/home', homeEN.getHome)
//router.put('/home', homeEN.putHome)

//TourEN
//router.get('/tours', tourEN.getTours)

//FoodsEN
//router.get('/foods', foodEN.getFoods)

//PlantsEN
//router.get('/plants', plantEN.getPlants)

//AnimalsEN
//router.get('/animals', animalEN.getAnimals)

//ProcessesEN
//router.get('/processes', processesEN.getProcesses)


/////////////////////////////////////////////////////////////// OTHER

module.exports = router
