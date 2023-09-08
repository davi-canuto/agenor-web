import mongoose, { Schema } from "mongoose";

const LanguageInfoSchema = new mongoose.Schema({
  name: String,
  level: String,
});

module.exports =
  mongoose.models.LanguageInfo ||
  mongoose.model("LanguageInfo", LanguageInfoSchema);
