import express from 'express';
import { createAsset,getAllAssets, getAssetById, deleteAsset, updateAsset } from '../controller/assetController.js';

const assetRouter = express.Router();

assetRouter.get("/get-assets", getAllAssets);
assetRouter.post("/create-assets", createAsset);
assetRouter.get("/create-assets/:id", getAssetById);
assetRouter.put("/update-assets", updateAsset);
assetRouter.delete("/delete-asset",deleteAsset)


export default assetRouter;