import express from "express";
import ArticleController from "../controller/ArticleController";
const router = express.Router();
import checkToken from "../middlewares/checkToken";
import upload from "../middlewares/upload";
//DELETE
router.delete(
  "/:id/delete-article",
  checkToken,
  ArticleController.DeleteArticle
);
//PATCH
router.patch(
  "/:id/update-article",
  checkToken,
  upload.single("image"),
  ArticleController.UpdateArticle
);
//POST
router.post(
  "/create-article",
  checkToken,
  upload.single("image"),
  ArticleController.CreateArticle
);
//GET
router.get(
  "/:apartment/get-article-apartment-id",
  ArticleController.GetArticle_ByApartment
);
router.get("/:id/get-one-article", ArticleController.GetOneArticle);
router.get("/get-all-article", ArticleController.GetAllArticle);
export default router;
