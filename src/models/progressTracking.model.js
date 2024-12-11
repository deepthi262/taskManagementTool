//Tracks user progress on roadmaps.

const ProgressSchema = new mongoose.Schema({

    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  
    roadmap: { type: mongoose.Schema.Types.ObjectId, ref: "Roadmap", required: true },
  
    completedTasks: { type: Number, default: 0 },
  
    totalTasks: { type: Number, required: true },
  
    progressPercentage: { type: Number, default: 0 },
  
    lastUpdated: { type: Date, default: Date.now },
  
  });
  
  module.exports = mongoose.model("Progress", ProgressSchema);