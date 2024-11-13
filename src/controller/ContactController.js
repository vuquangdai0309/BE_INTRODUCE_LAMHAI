import ContactModel from "../models/ContactModel";
class ContactController {
  //[GET]
  async GetAllContact(req, res) {
    try {
      const contact = await ContactModel.GetAllContact();
      res.status(200).json(contact);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Lỗi truy vấn" });
    }
  }
  //[POST]
  async CreateContact(req, res) {
    try {
      await ContactModel.createContact(req.body)
      return res.status(201).json({ message: "Thêm bản ghi thành công" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Lỗi truy vấn" });
    }
  }
  //[PUT]
  async UpdateStatusContact(req, res) {
    try {
      const id = req.params.id;
      await ContactModel.updateStatusContact(id, req.body);
      res.status(200).json({ message: "Sửa bản ghi thành công" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Lỗi truy vấn" });
    }
  }
  //[DELETE]
  async DeleteContact(req, res) {
    try {
      const id = req.params.id;
      await ContactModel.deleteContact(id);
      res.status(200).json({ message: "Xóa bản ghi thành công" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Lỗi truy vấn" });
    }
  }
}
export default new ContactController();
