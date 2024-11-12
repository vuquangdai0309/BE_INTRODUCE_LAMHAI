import AccountModel from "../models/AccountModel";
import jwt from "jsonwebtoken";
class AccountController {
  // đăng nhập
  async Login(req, res) {
    try {
      
      const user_name = req.body.user_name;
      const password = req.body.password;
      const accounts = await AccountModel.LoginAccount(user_name, password);
      if (accounts.length > 0) {
        const data = accounts[0];
        const token = jwt.sign(
          {
            id: data.id,
          },
          process.env.SECRET
        );
        res.cookie(process.env.COOKIE, token, {
          httpOnly: true,
          maxAge: 10 * 365 * 24 * 60 * 60 * 1000,
        });
        return res.status(200).json({
          message: "Đăng nhập thành công",
          token: token,
        });
      } else {
        return res.status(400).json({
          message: "Tài khoản hoặc mật khẩu không chính xác",
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Lỗi truy vấn" });
    }
  }
}
export default new AccountController();
