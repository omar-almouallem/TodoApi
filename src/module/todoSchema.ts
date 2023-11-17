import mongoose from 'mongoose';

export const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    max: 30,
  },
  description: {
    type: String,
    required: true,
    max: 100,
  },
  dataTime: {
    type: Date,
    default: Date.now,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model('Todo', todoSchema);
