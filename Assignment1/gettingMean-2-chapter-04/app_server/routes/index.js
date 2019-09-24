const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');
const ctrlPizzas = require('../controllers/pizzas');


router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

router.get('/about', ctrlOthers.about);

router.get('/pizza', ctrlPizzas.homelist);
router.get('/pizza/plocation', ctrlPizzas.pizzaInfo);
router.get('/pizza/plocation/review/new', ctrlPizzas.addReview);

module.exports = router;
