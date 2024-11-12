import ArticleModel from "../models/ArticleModel";
class ArticleController {
  //[GET]
  async GetAllArticle(req, res) {
    try {
      const article = await ArticleModel.GetAllArticle();
      res.status(200).json(article);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Lỗi truy vấn" });
    }
  }
  //[GET]
  async GetOneArticle(req, res) {
    try {
      const id = req.params.id;
      const article = await ArticleModel.GetOneArticle(id);
      const articleMap = new Map();
      article.forEach((element) => {
        if (!articleMap.has(element.id)) {
          articleMap.set(element.id, {
            id: element.id,
            apartment_id: element.apartment_id,
            title: element.title,
            describle: element.describle,
            image: element.image,
            service_article: [],
          });
        }
        const getArticle = articleMap.get(element.id);
        getArticle.service_article.push(element.name_service_article);
      });
      const data = Array.from(articleMap.values());
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Lỗi truy vấn" });
    }
  }
  //[GET]
  async GetArticle_ByApartment(req, res) {
    try {
      const apartment_id = req.params.apartment;
      const article = await ArticleModel.GetArticle_ByApartment(apartment_id);
      res.status(200).json({ article: article[0] });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Lỗi truy vấn" });
    }
  }
  //[POST]
  async CreateArticle(req, res) {
    try {
      const form = {
        ...req.body,
        image: req.file.path,
      };
      await ArticleModel.createArticle(form);
      res.status(200).json({ message: "Thêm bản ghi thành công" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Lỗi truy vấn" });
    }
  }
  //[PUT]
  async UpdateArticle(req, res) {
    try {
      const id = req.params.id;
      const form = {
        ...req.body,
        image: req.file ? req.file.path : req.body.image,
      };
      await ArticleModel.updateArticle(id, form);
      res.status(200).json({ message: "Sửa bản ghi thành công" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Lỗi truy vấn" });
    }
  }
  //[DELETE]
  async DeleteArticle(req, res) {
    try {
      const id = req.params.id;
      await ArticleModel.deleteArticle(id);
      res.status(200).json({ message: "Xóa bản ghi thành công" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Lỗi truy vấn" });
    }
  }
}
export default new ArticleController();
