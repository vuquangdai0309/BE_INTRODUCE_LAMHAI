import connection from "../config/db";
import ServiceArticleModel from "./ServiceArticleModel";
const ArticleModel = {
  // lấy tất cả
  GetAllArticle: () => {
    return new Promise((resolve, reject) => {
      const query = `SELECT a.*,
      ap.name AS apartment_name
      FROM article a
      JOIN apartment ap ON ap.id = a.apartment_id
      WHERE a.is_deleted = 0`;
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
      service_article.name AS name_service_article,
      a.Name AS apartment_name
      FROM article
      LEFT JOIN service_article ON service_article.article_id = article.id  
      JOIN apartment a ON a.id = article.apartment_id 
      WHERE article.is_deleted = 0 AND article.id = ${id}
      `;
      connection.query(query, async (err, results) => {
        if (err) {
          return reject(err);
        } else {
          if (results.length === 0) {
            return reject(err)
          }
          const getOneArticle = results[0]
          const listService = await ServiceArticleModel.GetService_ByArticle(getOneArticle.id)
          const newData = {
            ...getOneArticle,
            listService: listService
          }
          return resolve(newData);
        }
      });
    });
  },
  // lấy theo apartment
  GetArticle_ByApartment: (apartment) => {
    return new Promise((resolve, reject) => {
      const query = `SELECT a.* 
      FROM article a  
      WHERE 
      a.apartment_id = ${apartment} AND a.is_deleted = 0`;
      connection.query(query, async (err, results) => {
        if (err) {
          return reject(err);
        } else {
          const newArr = []
          for (const article of results) {
            const { id, ...data } = article
            const listServiceArticle = await ServiceArticleModel.GetService_ByArticle(id)
            const newData = {
              id: id,
              ...data,
              listService: listServiceArticle
            }
            newArr.push(newData)
          }
          return resolve(newArr);
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
