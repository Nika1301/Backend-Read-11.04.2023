import mongoose from "mongoose";

const { Schema } = mongoose;

const reviewtSchema = new Schema({
  title: { type: String },
  text: { type: String },
  rating: { type: Number },
});

const Review =
  mongoose.models.Review || mongoose.model("Review", reviewtSchema);

export default Review;
