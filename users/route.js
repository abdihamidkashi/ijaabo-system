const userController = require("./controller");
const router = require("express").Router();


router.post("/create", userController.createUser);
router.get("/", userController.getUsers);



module.exports = router;


