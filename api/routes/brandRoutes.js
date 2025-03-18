import express from "express";
import { isAuth } from "./../middlewares/authMiddleware.js";
import {
  createBrand,
  deleteBrandController,
  getAllBrandsController,
  updateBrandController,
} from "../controllers/brandController.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

//rroutes
// ============== CAT ROUTES ==================

// CREATE BRAND
router.post("/create", isAuth, singleUpload, createBrand);

// GET ALL BRAND
router.get("/get-all", getAllBrandsController);

// DELETE  BRAND
router.delete("/delete/:id", isAuth, deleteBrandController);

// UPDATE ALL BRAND
router.put("/update/:id", isAuth, updateBrandController);

// ====================================================================

export default router;