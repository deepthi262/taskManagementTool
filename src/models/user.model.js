
const UserSchema = new mongoose.Schema({

    name: { type: String, required: true },
  
    email: { type: String, required: true, unique: true },
  
    password: { type: String, required: true },
  
    role: { type: String, enum: ["Admin", "Team Member"], default: "Team Member" },
  
    createdAt: { type: Date, default: Date.now },
  
  });
  
  module.exports = mongoose.model("User", UserSchema);