import connection from "../config/db";
const ServiceModel = {
  // lấy tất cả
  GetAllService: () => {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM service WHERE is_deleted = 0`;
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
  GetOneService: (id) => {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM service WHERE id = ? AND is_deleted = 0`;
      connection.query(query, id, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },
  createService: (item) => {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO service(title,image) values(?,?)`;
      const values = [item.title, item.image];
      connection.query(query, values, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },
  updateService: (id, item) => {
    return new Promise((resolve, reject) => {
      const query = `UPDATE service SET title = ?,image = ? WHERE id = ?`;
      const values = [item.title, item.image, id];
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
  deleteService: (id) => {
    return new Promise((resolve, reject) => {
      const query = `UPDATE service SET is_deleted = 1 WHERE id = ?`;
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
export default ServiceModel;
