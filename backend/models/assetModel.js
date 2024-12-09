import mongoose from "mongoose"

const assetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      model: {
        type: String,
        required: true,
      },
      serialNumber: {
        type: String,
        required: true,
        unique: true,
      },
      condition: {
        type: String,
        enum: ['new', 'used', 'refurbished'],
        required: true,
      },
      assignedToEmployee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        default: null,
      },
      assignedToRoom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room',
        default: null,
      },
      assignedDate: {
        type: Date,
        default: Date.now,
      },
      returnDate: {
        type: Date,
        default: null,
      }
}, {minimize : false})

const assetModel =  mongoose.model.asset || mongoose.model("asset", assetSchema);

export default assetModel;