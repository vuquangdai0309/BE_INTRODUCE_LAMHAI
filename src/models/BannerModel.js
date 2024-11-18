import connection from "../config/db"

const BannerModel = {
    getAllBanner: () => {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM banner`
            connection.query(query, (err, results) => {
                if (err) {
                    return reject(err)
                }
                return resolve(results)
            })
        })
    },
    createBanner: (body) => {
        return new Promise((resolve, reject) => {
            const query = `INSERT INTO banner (title,description) VALUES (?,?)`
            const VALUES = [body.title,body.description]
            connection.query(query,VALUES,(err,results) => {
                if(err){
                    return reject(err)
                }
                return resolve(results)
            })
        })
    },
    updateBanner: (id,body) => {
        return new Promise((resolve, reject) => {
            const query = `UPDATE banner SET title = ? , description = ? WHERE id = ${id}`
            const VALUES = [body.title,body.description]
            connection.query(query,VALUES,(err,results) => {
                if(err){
                    return reject(err)
                }
                return resolve(results)
            })
        })
    }
}
export default BannerModel