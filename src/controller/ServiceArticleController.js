import ServiceArticleModel from "../models/ServiceArticleModel";
class ServiceArticleController {
  //[GET]
  async GetAllServiceArticle(req, res) {
    try {
      const service_article = await ServiceArticleModel.GetAllServiceArticle();
      res.status(200).json(service_article);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Lỗi truy vấn" });
    }
  }
  //[GET]
  async GetOneServiceArticle(req, res) {
    try {
      const id = req.params.id;
      const service_article = await ServiceArticleModel.GetOneServiceArticle(
        id
      );
      res.status(200).json(service_article[0]);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Lỗi truy vấn" });
    }
  }
  //[GET]
  async GetServiceArticle_ByArticle(req, res) {
    try {
      const article = req.params.article;
      const service_article =
        await ServiceArticleModel.GetService_ByArticle(article);
      res.status(200).json({ service_article: service_article[0] });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Lỗi truy vấn" });
    }
  }
  //[POST]
  async CreateServiceArticle(req, res) {
    try {
      await ServiceArticleModel.createServiceArticle({ ...req.body });
      res.status(200).json({ message: "Thêm bản ghi thành công" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Lỗi truy vấn" });
    }
  }
  //[PUT]
  async UpdateServiceArticle(req, res) {
    try {
      const id = req.params.id;
      await ServiceArticleModel.updateServiceArticle(id, { ...req.body });
      res.status(200).json({ message: "Sửa bản ghi thành công" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Lỗi truy vấn" });
    }
  }
  //[DELETE]
  async DeleteServiceArticle(req, res) {
    try {
      const id = req.params.id;
      await ServiceArticleModel.deleteServiceArticle(id);
      res.status(200).json({ message: "Xóa bản ghi thành công" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Lỗi truy vấn" });
    }
  }
}
export default new ServiceArticleController();
