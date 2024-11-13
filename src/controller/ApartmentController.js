import ApartmentModel from "../models/ApartmentModel";
class ApartmentController {
  //[GET]
  async GetAllApartment(req, res) {
    try {
      const apartment = await ApartmentModel.GetAllApartment();
      res.status(200).json(apartment);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Lỗi truy vấn" });
    }
  }
  //[GET]
  async GetOneApartment(req, res) {
    try {
      const id = req.params.id;
      const apartment = await ApartmentModel.GetOneApartment(id);
      res.status(200).json(apartment[0]);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Lỗi truy vấn" });
    }
  }
  //[POST]
  async CreateApartment(req, res) {
    try {
      await ApartmentModel.createApartment({ ...req.body });
      res.status(200).json({ message: "Thêm bản ghi thành công" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Lỗi truy vấn" });
    }
  }
  //[PUT]
  async UpdateApartment(req, res) {
    try {
      const id = req.params.id;
      await ApartmentModel.updateApartment(id, { ...req.body });
      res.status(200).json({ message: "Sửa bản ghi thành công" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Lỗi truy vấn" });
    }
  }
  //[DELETE]
  async DeleteApartment(req, res) {
    try {
      const id = req.params.id;
      await ApartmentModel.deleteApartment(id);
      res.status(200).json({ message: "Xóa bản ghi thành công" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Lỗi truy vấn" });
    }
  }
}
export default new ApartmentController();
