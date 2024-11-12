import connection from "../config/db";
const ServiceArticleModel = {
  // lấy tất cả
  GetAllServiceArticle: () => {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM service_article WHERE is_deleted = 0`;
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
  GetOneServiceArticle: (id) => {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM service_article WHERE id = ? AND is_deleted = 0`;
      connection.query(query, id, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },
  // lấy bài viết theo article
  GetService_ByArticle: (article) => {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM service_article WHERE article_id = ? AND is_deleted = 0`;
      connection.query(query, article, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },
  createServiceArticle: (item) => {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO service_article(article_id,name,describle,content) values(?,?,?,?)`;
      const values = [item.article_id, item.name, item.describle, item.content];
      connection.query(query, values, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },
  updateServiceArticle: (id, item) => {
    return new Promise((resolve, reject) => {
      const query = `UPDATE service_article SET article_id = ?, name = ?,describle = ?,content = ? WHERE id = ?`;
      const values = [
        item.article_id,
        item.name,
        item.describle,
        item.content,
        id,
      ];
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
  deleteServiceArticle: (id) => {
    return new Promise((resolve, reject) => {
      const query = `UPDATE service_article SET is_deleted = 1 WHERE id = ?`;
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
export default ServiceArticleModel;
