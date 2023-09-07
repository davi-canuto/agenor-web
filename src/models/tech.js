import mongoose, { Schema } from 'mongoose'

const TechSchema = new mongoose.Schema({
  name: String
})

module.exports = mongoose.models.Tech || mongoose.model('Tech', TechSchema)