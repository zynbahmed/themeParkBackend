const { Schema } = require('mongoose')

const themeParkSchema = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String },
    mainAttraction: { type: String },
    description: { type: String },
    image: { type: String }
  },
  { timestamps: true }
)

module.exports = themeParkSchema
