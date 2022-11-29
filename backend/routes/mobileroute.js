const router = require('express').Router();
const mobileController = require("../controllers/mobileController");

router.get("/", mobileController.getAllMobiles);
router.post("/", mobileController.addMobile);
router.get("/:id", mobileController.getById);
router.put("/:id", mobileController.updateMobile);
router.delete("/:id", mobileController.deleteMobile);


module.exports = router;
