import mongoose, { Schema } from 'mongoose'

const ExperienceSchema = new mongoose.Schema({
  name: String,
  companyName: String,
  companyDescription: String,
  companyUrl: String,
  jobPosition: String,
  workDescription: String,
  startAt: Date,
  endAt: Date,
})

module.exports = mongoose.models.Experience || mongoose.model('Experience', ExperienceSchema)