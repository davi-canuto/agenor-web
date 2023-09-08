import mongoose, { Schema } from "mongoose";

const PersonalInfoSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  birthdate: Date,
  occupation: String,
  goals: String,
  biography: String,
  about: String,
  githubUsername: String,
  githubUrl: String,
  instargramUsername: String,
  instargramUrl: String,
  twitterUsername: String,
  twitterUrl: String,
  linkedinUsername: String,
  linkedinUrl: String,
});

module.exports =
  mongoose.models.PersonalInfo ||
  mongoose.model("PersonalInfo", PersonalInfoSchema);
