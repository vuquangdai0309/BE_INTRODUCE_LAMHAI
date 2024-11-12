import connection from "../config/db";
const ApartmentModel = {
  // lấy tất cả
  GetAllApartment: () => {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM apartment WHERE is_deleted = 0`;
      connection.query(query, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },
  // lấy 1
  GetOneApartment: (id) => {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM apartment WHERE id = ? AND is_deleted = 0`;
      connection.query(query, id, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },
  createApartment: (item) => {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO apartment(name) values(?)`;
      const values = [item.name];
      connection.query(query, values, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },
  updateApartment: (id, item) => {
    return new Promise((resolve, reject) => {
      const query = `UPDATE apartment SET name = ? WHERE id = ?`;
      const values = [item.name, id];
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
  deleteApartment: (id) => {
    return new Promise((resolve, reject) => {
      const query = `UPDATE apartment SET is_deleted = 1 WHERE id = ?`;
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
export default ApartmentModel;
