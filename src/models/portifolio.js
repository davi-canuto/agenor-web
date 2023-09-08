import mongoose, { Schema } from "mongoose";

const PortifolioSchema = new mongoose.Schema({
  personalInfo: { type: Schema.Types.ObjectId, ref: "PersonalInfo" },
  projects: { type: Schema.Types.ObjectId, ref: "Project" },
  academicInfos: { type: Schema.Types.ObjectId, ref: "AcademicInfo" },
  languages: { type: Schema.Types.ObjectId, ref: "Language" },
  skills: { type: Schema.Types.ObjectId, ref: "Skill" },
  techs: { type: Schema.Types.ObjectId, ref: "Tech" },
  isPersisted: Boolean,
});

module.exports =
  mongoose.models.Portifolio || mongoose.model("Portifolio", PortifolioSchema);
