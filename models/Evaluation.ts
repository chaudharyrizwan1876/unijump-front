import mongoose, { Schema, models, model } from "mongoose";

const EvaluationSchema = new Schema(
  {
    degree: {
      type: String,
      required: true,
    },
    englishLevel: {
      type: String,
      required: true,
    },
    startDate: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Evaluation =
  models.Evaluation || model("Evaluation", EvaluationSchema);

export default Evaluation;