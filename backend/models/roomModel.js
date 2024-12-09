import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    roomName: { 
        type: String, 
        required: true, 
        unique: true 
      },
      createdAt: { 
        type: Date, 
        default: Date.now 
      },
})

const roomModel = mongoose.model.roomModel || mongoose.model('room', roomSchema);

export default roomModel;