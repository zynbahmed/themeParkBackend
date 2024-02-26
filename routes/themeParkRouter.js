const router = require('express').Router()
const controller = require('../controllers/themeParkController')
const middleware = require('../middleware')

router.get('/', controller.GetParks)
router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreatePark
)
router.delete(
  '/:post_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeletePark
)

module.exports = router
