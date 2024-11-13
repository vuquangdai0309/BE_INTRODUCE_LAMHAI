import express from "express";
const router = express.Router();
import checkToken from "../middlewares/checkToken";
import upload from "../middlewares/upload";
import ContactController from "../controller/ContactController";
//DELETE
router.delete(
  "/:id/delete-contact",
  ContactController.DeleteContact
);
//POST
router.post(
  "/create-contact",
  ContactController.CreateContact
);
router.patch(
  "/update-status-contact/:id",
  ContactController.UpdateStatusContact
);

router.get("/get-all-contact", ContactController.GetAllContact);
export default router;
