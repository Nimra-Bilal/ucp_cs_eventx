import mongoose from "mongoose";

const NewsletterSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Newsletter ||
mongoose.model("Newsletter", NewsletterSchema);