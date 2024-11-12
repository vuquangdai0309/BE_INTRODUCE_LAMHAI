import express from "express";
import ApartmentController from "../controller/ApartmentController";
const router = express.Router();
import checkToken from "../middlewares/checkToken";

//DELETE
router.delete(
  "/:id/delete-apartment",
  checkToken,
  ApartmentController.DeleteApartment
);
//PATCH
router.patch(
  "/:id/update-apartment",
  checkToken,
  ApartmentController.UpdateApartment
);
//POST
router.post(
  "/create-apartment",
  checkToken,
  ApartmentController.CreateApartment
);
//GET
router.get("/:id/get-one-apartment", ApartmentController.GetOneApartment);
router.get("/get-all-apartment", ApartmentController.GetAllApartment);
export default router;
