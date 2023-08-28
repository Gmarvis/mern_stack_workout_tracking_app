const express = require("express")


// controller funtions 
const {LoginUser , SignupUser} = require("../controllers/userController.js")

const router = express.Router()

// login route
router.post("/login", LoginUser)



// signup route
router.post("/signup", SignupUser)




module.exports = router