import mongoose from "mongoose";

const PortfolioSchema = new mongoose.Schema({
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
  projects: [
    {
      name: String,
      description: String,
      startAt: Date,
      endAt: Date,
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
      startAt: Date,
      endAt: Date,
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
      startAt: Date,
      endAt: Date,
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
  mongoose.models.Portifolio || mongoose.model("Portifolio", PortfolioSchema);
