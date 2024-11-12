import connection from "../config/db";
const ArticleModel = {
  // lấy tất cả
  GetAllArticle: () => {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM article WHERE is_deleted = 0`;
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
  GetOneArticle: (id) => {
    return new Promise((resolve, reject) => {
      const query = `
      SELECT article.*,
      service_article.name AS name_service_article
      FROM article
      JOIN service_article ON article.id = service_article.article_id
      WHERE article.is_deleted = 0 AND article.id = ?
      `;
      connection.query(query, id, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },
  // lấy theo apartment
  GetArticle_ByApartment: (apartment) => {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM article WHERE apartment_id = ? AND is_deleted = 0`;
      connection.query(query, apartment, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },
  createArticle: (item) => {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO article(apartment_id,title,describle,image) values(?,?,?,?)`;
      const values = [
        item.apartment_id,
        item.title,
        item.describle,
        item.image,
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
  updateArticle: (id, item) => {
    return new Promise((resolve, reject) => {
      const query = `UPDATE article SET apartment_id = ?,title = ?,describle = ?,image = ? WHERE id = ?`;
      const values = [
        item.apartment_id,
        item.title,
        item.describle,
        item.image,
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
  deleteArticle: (id) => {
    return new Promise((resolve, reject) => {
      const query = `UPDATE article SET is_deleted = 1 WHERE id = ?`;
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
export default ArticleModel;
