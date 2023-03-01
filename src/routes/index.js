const { Router } = require('express')
const router = Router()

//Routes Spanish
const home = require('../controllers/es/home/home')
const tour = require('../controllers/es/tour/tour')
const food = require('../controllers/es/food/food')

const animalsPlants = require('../controllers/es/animals-plants/animals-plants')

const plant = require('../controllers/es/plant/plant')
const animal = require('../controllers/es/animal/animal')
const processes = require('../controllers/es/process/process')
const about = require('../controllers/es/about/about')

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


//AnimalsPlantsES
router.get('/animalsplants', animalsPlants.getAnimalsPlants)

////********************************************
//PlantsES
router.get('/plants', plant.getPlants)
//Animals ES
router.get('/animals', animal.getAnimals)
///*******************************************


//Processes ES
router.get('/processes', processes.getProcesses)

//About ES
router.get('/about', about.getAbout)

/////////////////////////////////////////////////////////////// ENGLISH

//HomeEN
router.get('/homeEN', homeEN.getHome)
router.put('/homeEN', homeEN.putHome)

//TourEN
router.get('/toursEN', tourEN.getTours)

//FoodsEN
router.get('/foodsEN', foodEN.getFoods)

//PlantsEN
router.get('/plantsEN', plantEN.getPlants)

//AnimalsEN
router.get('/animalsEN', animalEN.getAnimals)

//ProcessesEN
router.get('/processesEN', processesEN.getProcesses)


/////////////////////////////////////////////////////////////// OTHER

module.exports = router
