import mongoose from "mongoose";

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
  assetType: {
    type: String,
    enum: ['hardware', 'furniture', 'other'], // Adjust types as needed
    required: true,
  },
  assignedToEmployee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'employee',
    default: null,
  },
  assignedToRoom: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'room',
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
}, { minimize: false });

const assetModel = mongoose.model.assetModel || mongoose.model("asset", assetSchema)
export default assetModel;