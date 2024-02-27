const router = require('express').Router()
const controller = require('../controllers/waterParkController')

router.get('/', controller.GetParks)
router.get('/:waterPark_id', controller.GetParkDetails)
router.post( '/', controller.CreatePark)
router.delete('/:waterPark_id', controller.DeletePark)

module.exports = router
