
import mongoose from 'mongoose';

// Define the schema for Asset Replacement
const assetReplacementSchema = new mongoose.Schema(
  {
    assetId: {
      type: mongoose.Schema.Types.ObjectId,  // Reference to the Asset model
      ref: 'asset',  // Reference to Asset collection
      required: true,
    },
    replacementDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
    employeeInfo: {
      type: mongoose.Schema.Types.ObjectId,  // Reference to the Employee model
      ref: 'employee',  // Reference to Employee collection
      required: true,
    },
    assetInfo: {
      assetNameDescription: {
        type: String,
        required: true,
      },
      assetType: {
        type: String,
        required: true,
      },
      assetIdSerialNumber: {
        type: String,
        required: true,
      },
      assetLocation: {
        type: String,
        required: true,
      },
      reasonForReplacement: {
        type: String,
        enum: ['Damaged beyond repair', 'Outdated/obsolete', 'Malfunctioning/No longer functioning', 'Other'],
        required: true,
      },
      currentCondition: {
        type: String,
        enum: ['Working', 'Partially Working', 'Not Working'],
        required: true,
      },
    },
    replacementDetails: {
      requestedReplacementAssetNameDescription: {
        type: String,
        required: true,
      },
      requiredSpecifications: {
        type: String,
      },
      priorityLevel: {
        type: String,
        enum: ['High (Urgent)', 'Medium (Important)', 'Low (Routine)'],
        required: true,
      },
    },
    approvalSection: {
      managerName: {
        type: String,
        required: true,
      },
      managerSignature: {
        type: String,
        required: true,
      },
      approvalDate: {
        type: Date,
        required: true,
        default: Date.now,
      },
    },
  },
  { timestamps: true }
);


// Create the model for asset replacement
const assetReplacementModel = mongoose.model.assetReplacementModel || mongoose.model('assetreplacement', assetReplacementSchema);

export default assetReplacementModel;
