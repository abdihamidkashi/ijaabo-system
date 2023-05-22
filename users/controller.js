const userService = require("./service");


module.exports = {
    createUser: (req, res) => {
        userService.insertUser(req.body, (error, result) => {
            if(error){
                console.log(error);
                res.status(500).json({
                    success: 0,
                    message: "User creation failed"
                })
            }
            res.status(200).json({
                success: 1,
                data: result
            })
        })
    },

    getUsers : (req, res) => {
        userService.getUsers((error, results) => {
            if(error){
                console.log(error);
                res.status(500).json({
                    success: 0,
                    message: "Users not found"
                })
            }
            res.status(200).json({
                success: 1,
                data: results
            })

        })
    }
}