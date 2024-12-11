//Tracks individual tasks and their statuses.
const TaskSchema = new mongoose.Schema({

    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  
    roadmap: { type: mongoose.Schema.Types.ObjectId, ref: "Roadmap", required: true },
  
    day: { type: Number, required: true },
  
    title: { type: String, required: true },
  
    description: { type: String, required: true },
  
    status: { type: String, enum: ["To Do", "In Progress", "Completed"], default: "To Do" },
  
    resources: [{ type: String }],
  
    createdAt: { type: Date, default: Date.now },
  
  });
  
  module.exports = mongoose.model("Task", TaskSchema);