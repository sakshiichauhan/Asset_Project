import { assetModel } from "../models/assetModel.js";

//create asset
const createAsset = async (req, res) => {
    try {
      const { name, description, model, serialNumber, condition, assignedToEmployee, assignedToRoom, assignedDate, returnDate } = req.body;
   
      const newAsset = new Asset({
        name,
        description,
        model,
        serialNumber,
        condition,
        assignedToEmployee,
        assignedToRoom,
        assignedDate,
        returnDate,
      });
   
      await newAsset.save();
      res.status(201).json({ message: 'Asset created successfully', asset: newAsset });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error creating asset', error });
    }
  };
//get all the assets
const getAllAssets = async (req, res) => {
  try {
    const assets = await assetModel.find();
    res.status(200).json(assets);
  } catch (error) {
    console.error(error);
    res.json({
      success: false,
      message: "Error fetching all the assets",error
    });
  }
};

//get asset by id
const getAssetById = async (req, res) => {
  try {
    const assets = await assetModel
      .findById(req.params.id)
      .populate("assignedToEmployee assignedToRoom");
    if (!assets) {
      return res.status(404).json({
        success: false,
        message: "Asset not found" 
        });
    }
    res.status(200).json(assets);
  } catch (error) {
    console.error(error);
    res.status(500).json({
        success: false,
        message: "Error fetching asset" 
        });
  }
};
const updateAsset = async (req, res) => {
  try {
    const {
      name,
      description,
      model,
      condition,
      assignedToEmployee,
      assignedToRoom,
      returnDate,
    } = req.body;

    const updatedAsset = await assetModel.findByIdAndUpdate(
      req.params.id,
      {
        name,
        description,
        model,
        condition,
        assignedToEmployee,
        assignedToRoom,
        returnDate,
      },
      { new: true } // Return the updated document
    );

    if (!updatedAsset) {
      return res.status(404).json({
        message: "Asset not found" });
    }
    res
      .status(200)
      .json({ message: "Asset updated successfully", asset: updatedAsset });
  } catch (error) {
    console.error(error);
    res.status(500).json({
        success: false,
        message: "Error updating asset", error
        });
  }
};

// Delete Asset by ID
const deleteAsset = async (req, res) => {
  try {
    const deletedAsset = await assetModel.findByIdAndDelete(req.params.id);

    if (!deletedAsset) {
      return res.status(404).json({ message: "Asset not found" });
    }

    res.status(200).json({ message: "Asset deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting asset", error });
  }
};

export { createAsset,getAllAssets, getAssetById, deleteAsset, updateAsset };
