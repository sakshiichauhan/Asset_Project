import mongoose from "mongoose";
const assetMaintenanceSchema = new mongoose.Schema({
  assetID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'asset',
      required: true,
  },
  maintenanceDate: {
      type: Date,
      required: true,
  },
  maintenanceDetails: {
      type: String,
  },
  maintenanceType: {
      type: String,
      required: true,
  },
  createdAt: {
      type: Date,
      default: Date.now,
  },
  updatedAt: {
      type: Date,
      default: Date.now,
  },
});

 
const assetMaintenance = mongoose.model('assetMaintenance', assetMaintenanceSchema);

export default assetMaintenance 