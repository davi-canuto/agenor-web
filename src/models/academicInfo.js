import mongoose, { Schema } from 'mongoose'

const AcademicInfoSchema = new mongoose.Schema({
  name: String,
  description: String,
  certificateUrl: String,
  startAt: Date,
  endAt: Date,
})

module.exports = mongoose.models.AcademicInfo || mongoose.model('AcademicInfo', AcademicInfoSchema)