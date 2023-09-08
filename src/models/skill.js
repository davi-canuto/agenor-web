import mongoose, { Schema } from "mongoose";

const SkillSchema = new mongoose.Schema({
  name: String,
  isSoft: Boolean,
  description: String,
});

module.exports = mongoose.models.Skill || mongoose.model("Skill", SkillSchema);
