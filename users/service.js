const pool = require("../config/connection");


module.exports = {
    insertUser: (data, callBack) => {
        let sql =  "CALL users_sp (?,?,?,?,?)";

        pool.query(
           sql,
            [data.name, data.username, data.password, data.email, data.user_id],
            (error, results, fields) =>{
                if(error){
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getUsers: (callBack) => {
        pool.query(
            "SELECT * FROM users",
            [],
            (error, results, fields) =>{
                if(error){
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
}