import connection from "../config/db";
const AccountModel = {
  // lấy 1 tài khoản
  GetOneAccount: (id) => {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM account WHERE is_deleted = 0 AND id = ?`;
      connection.query(query, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },
  // login
  LoginAccount: (username, password) => {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM account WHERE is_deleted = 0 AND user_name = ? AND password = ?`;
      connection.query(query, [username, password], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },
};
export default AccountModel;
