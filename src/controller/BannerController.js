import BannerModel from "../models/BannerModel";

class BannerController {
    async getAllBanner(req,res) {
        try {
            const results = await BannerModel.getAllBanner()
            return res.status(200).json(results);
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: "Lỗi truy vấn" });
        }
    }
    async createBanner(req,res){
        try {
            const results = await BannerModel.getAllBanner()
            if(results.length){
                return res.status(400).json({
                    message: "Không thể thêm , hiện đang có dữ liệu"
                });
            }
            await BannerModel.createBanner(req.body)
            return res.status(200).json({
                message: "Tạo mới thành công"
            });
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: "Lỗi truy vấn" });
        }
    }
    async updateBanner(req,res){
        try {
            const id = req.params.id
            await BannerModel.updateBanner(id,req.body)
            return res.status(200).json({
                message: "Tạo mới thành công"
            });
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: "Lỗi truy vấn" });
        }
    }
}
export default new BannerController();