const { Schema } = require('mongoose')

const waterParkSchema = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String },
    openingTime: { type: String },
    noOfRides: { type: Number },
    mainAttraction: { type: String },
    image: { type: String }
  },
  { timestamps: true }
)

module.exports = waterParkSchema
