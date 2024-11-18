import express from "express";
import BannerController from "../controller/BannerController";
const router = express.Router();

router.get("/get-all-banner",BannerController.getAllBanner)
router.post("/create-banner",BannerController.createBanner)
router.patch("/get-update-banner/:id",BannerController.updateBanner)
export default router;
