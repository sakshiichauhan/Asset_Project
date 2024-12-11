import mongoose from "mongoose";

const roomSchema = new mongoose.Schema( 
  {
  
    roomId: { 
      type: String, 
      required: true, 
      unique: true,  // Ensure each roomId is unique
    },
    roomName: { 
      type: String, 
      required: true, 
      unique: true 
    },
  },
  {
    timestamps: true, 
      }
);

const roomModel = mongoose.model.roomModel || mongoose.model('room', roomSchema);

export default roomModel;