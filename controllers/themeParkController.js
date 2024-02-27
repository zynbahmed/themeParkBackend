const { ThemePark } = require('../models')

const GetParks = async (req, res) => {
  try {
    const parks = await ThemePark.find({})
    res.send(parks)
  } catch (error) {
    throw error
  }
}

const GetParkDetails = async (req, res) => {
  const parkId = req.params.themePark_id
  try {
    const park = await ThemePark.findById(parkId)
    res.send(park)
  } catch (error) {
    throw(error)
  }
}

const CreatePark = async (req, res) => {
  try {
    const park = await ThemePark.create({ ...req.body })
    res.send(park)
  } catch (error) {
    throw error
  }
}

const DeletePark = async (req, res) => {
  try {
    await ThemePark.deleteOne({ _id: req.params.themePark_id })
    res.send({ msg: 'Park Deleted', payload: req.params.themePark_id, status: 'Ok' })
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
