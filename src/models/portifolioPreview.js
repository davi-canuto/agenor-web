import mongoose from "mongoose";

const PortifolioPreviewSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  birthdate: String,
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
  projects: [
    {
      name: String,
      description: String,
      startAt: String,
      endAt: String,
      techs: [
        {
          name: String,
        },
      ],
      url: String,
      isPrivate: Boolean,
    },
  ],
  experiences: [
    {
      name: String,
      companyName: String,
      companyDescription: String,
      companyUrl: String,
      jobPosition: String,
      workDescription: String,
      startAt: String,
      endAt: String,
    },
  ],
  skills: [
    {
      name: String,
      isSoftSkill: Boolean,
      description: String,
    },
  ],
  academicInfos: [
    {
      name: String,
      description: String,
      certificateUrl: String,
      startAt: String,
      endAt: String,
    },
  ],
  languages: [
    {
      name: String,
      level: String,
    },
  ],
});

module.exports =
  mongoose.models.PortifolioPreview ||
  mongoose.model("PortifolioPreview", PortifolioPreviewSchema);
