const express = require("express")

const router = express.Router();


// To create user//

router.post("/", require("./../Controllers/User").AddUser);

// To Get All user data From Database //

router.get("/", require("./../Controllers/User").getAllUser);

// To Get Specific User Data from Database///

router.get("/:userId", require("./../Controllers/User").getUser);


// To delete data From Database //

router.delete("/:userId", require("./../Controllers/User").delUser);


// To Update data From Database //

router.put("/:userId", require("./../Controllers/User").updateUser);


module.exports = router;