import assetModel from "../models/assetModel.js";

// Create Asset
const createAsset = async (req, res) => {
  try {
    const { name, description, model, serialNumber, condition, assignedToEmployee, assignedToRoom, assignedDate, returnDate, assetType } = req.body;

    // Create a new asset
    const newAsset = new assetModel({
      name,
      description,
      model,
      serialNumber,
      condition,
      assignedToEmployee,
      assignedToRoom,
      assignedDate,
      returnDate,
      assetType, // Added assetType here
    });

    // Save the new asset
    await newAsset.save();
    res.status(201).json({ message: 'Asset created successfully', asset: newAsset });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating asset', error: error.message });
  }
};

// Get All Assets
const getAllAssets = async (req, res) => {
  try {
    // Get all assets from the database
    const assets = await assetModel.find();
    res.status(200).json(assets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching all assets", error: error.message });
  }
};

// Get Asset by ID
const getAssetById = async (req, res) => {
  try {
    // Find the asset by ID and populate the referenced fields
    const asset = await assetModel.findById(req.params.id).populate("assignedToEmployee assignedToRoom");

    if (!asset) {
      return res.status(404).json({ message: "Asset not found" });
    }
    res.status(200).json(asset);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching asset", error: error.message });
  }
};

// Update Asset
const updateAsset = async (req, res) => {
  try {
    const { name, description, model, condition, assignedToEmployee, assignedToRoom, returnDate, assetType } = req.body;

    // Update the asset by ID and return the updated asset
    const updatedAsset = await assetModel.findByIdAndUpdate(
      req.params.id,
      { name, description, model, condition, assignedToEmployee, assignedToRoom, returnDate, assetType }, // Update with assetType
      { new: true } // Return the updated asset
    );

    if (!updatedAsset) {
      return res.status(404).json({ message: "Asset not found" });
    }

    res.status(200).json({ message: "Asset updated successfully", asset: updatedAsset });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating asset", error: error.message });
  }
};

// Delete Asset by ID
const deleteAsset = async (req, res) => {
  try {
    // Delete the asset by ID
    const deletedAsset = await assetModel.findByIdAndDelete(req.params.id);

    if (!deletedAsset) {
      return res.status(404).json({ message: "Asset not found" });
    }

    res.status(200).json({ message: "Asset deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting asset", error: error.message });
  }
};

export { createAsset, getAllAssets, getAssetById, updateAsset, deleteAsset };
