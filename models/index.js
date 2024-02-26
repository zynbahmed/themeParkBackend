const mongoose = require('mongoose')
const themeParkSchema = require('./ThemePark')
const waterParkSchema = require('./WaterPark')

const ThemePark = mongoose.model('ThemePark', themeParkSchema)
const WaterPark = mongoose.model('WaterPark', waterParkSchema)

module.exports = {
  ThemePark,
  WaterPark
}
