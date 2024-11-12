import ServiceModel from "../models/ServiceModel";
class ServiceController {
  //[GET]
  async GetAllService(req, res) {
    try {
      const service = await ServiceModel.GetAllService();
      res.status(200).json(service);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Lỗi truy vấn" });
    }
  }
  //[GET]
  async GetOneService(req, res) {
    try {
      const id = req.params.id;
      const service = await ServiceModel.GetOneService(id);
      res.status(200).json({ service: service[0] });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Lỗi truy vấn" });
    }
  }
  //[POST]
  async CreateService(req, res) {
    try {
      const form = {
        ...req.body,
        image: req.file.path,
      };
      await ServiceModel.createService(form);
      res.status(200).json({ message: "Thêm bản ghi thành công" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Lỗi truy vấn" });
    }
  }
  //[PUT]
  async UpdateService(req, res) {
    try {
      const id = req.params.id;
      const form = {
        ...req.body,
        image: req.file ? req.file.path : req.body.image,
      };
      console.log(form)
      await ServiceModel.updateService(id, form);
      res.status(200).json({ message: "Sửa bản ghi thành công" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Lỗi truy vấn" });
    }
  }
  //[DELETE]
  async DeleteService(req, res) {
    try {
      const id = req.params.id;
      await ServiceModel.deleteService(id);
      res.status(200).json({ message: "Xóa bản ghi thành công" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Lỗi truy vấn" });
    }
  }
}
export default new ServiceController();
