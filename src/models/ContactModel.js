import connection from "../config/db";
const ContactModel = {
  // lấy tất cả
  GetAllContact: () => {
    return new Promise((resolve, reject) => {
      const query = `SELECT c.*
      FROM contact c`
      connection.query(query, async (err, results) => {
        if (err) {
          return reject(err);
        } else {
          if(results.length === 0){
            return reject(err);
          }
          
          return resolve(results);
        }
      });
    });
  },
  createContact: (item) => {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO contact (full_name,email,tel,message) values(?,?,?,?)`;
      const values = [item.full_name,item.email,item.tel,item.message];
      connection.query(query, values, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },
  updateStatusContact: (id, item) => {
    return new Promise((resolve, reject) => {
      const query = `UPDATE contact SET status = ? WHERE id = ?`;
      const values = [item.status, id];
      connection.query(query, values, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },
  // xóa
  deleteContact: (id) => {
    return new Promise((resolve, reject) => {
      const query = `DELETE FROM contact WHERE id = ?`;
      connection.query(query, id, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },
};
export default ContactModel;
