//Defines the roadmap structure and tasks.

const RoadmapSchema = new mongoose.Schema({

  title: { type: String, required: true },

  description: { type: String, required: true },

  duration: { type: Number, required: true },

  tasks: [

    {

      day: { type: Number, required: true },

      title: { type: String, required: true },

      description: { type: String, required: true },

      topics: { type: String, required: true },

      resources: [{ type: String }],

    },

  ],

  createdAt: { type: Date, default: Date.now },

});

module.exports = mongoose.model("Roadmap", RoadmapSchema);

 