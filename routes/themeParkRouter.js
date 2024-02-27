const router = require('express').Router()
const controller = require('../controllers/themeParkController')

router.get('/', controller.GetParks)
router.get('/:themePark_id', controller.GetParkDetails)
router.post( '/', controller.CreatePark)
router.delete('/:themePark_id', controller.DeletePark)

module.exports = router
