const { WaterPark } = require('../models')

const GetParks = async (req, res) => {
  try {
    const parks = await WaterPark.find({})
    res.send(parks)
  } catch (error) {
    throw error
  }
}

const GetParkDetails = async (req, res) => {
  const parkId = req.params.waterPark_id
  try {
    const park = await ThemePark.findById(parkId)
    res.send(park)
  } catch (error) {
    throw(error)
  }
}

const CreatePark = async (req, res) => {
  try {
    const park = await WaterPark.create({ ...req.body })
    res.send(park)
  } catch (error) {
    throw error
  }
}

const DeletePark = async (req, res) => {
  try {
    await WaterPark.deleteOne({ _id: req.params.waterPark_id })
    res.send({ msg: 'Park Deleted', payload: req.params.waterPark_id, status: 'Ok' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetParks,
  GetParkDetails,
  CreatePark,
  DeletePark
}