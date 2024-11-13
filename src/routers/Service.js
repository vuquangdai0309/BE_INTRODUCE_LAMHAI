import express from "express";
import ServiceController from "../controller/ServiceController";
const router = express.Router();
import checkToken from "../middlewares/checkToken";
import upload from "../middlewares/upload";
//DELETE
router.delete(
  "/:id/delete-service",
  // checkToken,
  ServiceController.DeleteService
);
//PATCH
router.patch(
  "/update-service",
  // checkToken,
  upload.single("image"),
  ServiceController.UpdateService
);

//POST
router.post(
  "/create-service",
  // checkToken,
  upload.single("image"),
  ServiceController.CreateService
);
//GET
router.get("/:id/get-one-service", ServiceController.GetOneService);
router.get("/get-all-service", ServiceController.GetAllService);
export default router;
