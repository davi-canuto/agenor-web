import mongoose, { Schema } from "mongoose";

const ProjectSchema = new mongoose.Schema({
  name: String,
  description: String,
  url: String,
  startAt: Date,
  endAt: Date,
  isPrivate: Boolean,
  techs: [
    {
      type: Schema.Type.ObjectId,
      ref: "Stack",
    },
  ],
});

module.exports =
  mongoose.models.Project || mongoose.model("Project", ProjectSchema);
