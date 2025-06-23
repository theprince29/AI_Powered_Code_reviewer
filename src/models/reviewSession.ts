import mongoose from 'mongoose';

const reviewSessionSchema = new mongoose.Schema({
  code: String,
  prompt: String,
  response: {
    strengths: [String],
    issues: [String],
    suggestions: [String]
  },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('ReviewSession', reviewSessionSchema);
