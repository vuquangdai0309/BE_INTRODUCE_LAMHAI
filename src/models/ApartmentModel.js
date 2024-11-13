import connection from "../config/db";
import ArticleModel from "./ArticleModel";
const ApartmentModel = {
  // lấy tất cả
  GetAllApartment: () => {
    return new Promise((resolve, reject) => {
      const query = `SELECT a.*
      FROM apartment a
      WHERE a.is_deleted = 0`;
      connection.query(query, async (err, results) => {
        if (err) {
          return reject(err);
        } else {
          if(results.length === 0){
            return reject(err);
          }
          const newArr = []
          for (const apartment of results) {
            const { id, ...data } = apartment
            const listArticleByApartmentId = await ArticleModel.GetArticle_ByApartment(id)
            const newData = {
              id: id,
              ...data,
              listArticle: listArticleByApartmentId
            }
            newArr.push(newData)
          }
          return resolve(newArr);
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
