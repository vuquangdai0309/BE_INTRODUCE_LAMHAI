import express from "express";
import ServiceArticleController from "../controller/ServiceArticleController";
const router = express.Router();
import checkToken from "../middlewares/checkToken";
import upload from "../middlewares/upload";
//DELETE
router.delete(
  "/:id/delete-service-article",
  // checkToken,
  ServiceArticleController.DeleteServiceArticle
);
//PATCH
router.patch(
  "/:id/update-service-article",
  // checkToken,
  upload.single("image"),
  ServiceArticleController.UpdateServiceArticle
);

//POST
router.post(
  "/create-service-article",
  // checkToken,
  upload.single("image"),
  ServiceArticleController.CreateServiceArticle
);
//GET
router.get(
  "/:id/get-one-service-article",
  ServiceArticleController.GetOneServiceArticle
);
router.get(
  "/:article/get-service-article-by-article-id",
  ServiceArticleController.GetServiceArticle_ByArticle
);
router.get(
  "/get-all-service-article",
  ServiceArticleController.GetAllServiceArticle
);
export default router;
