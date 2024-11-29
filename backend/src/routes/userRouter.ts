import express from "express";

// import userCtrl from "../controllers/userCtrl"; won't work in this case
const userCtrl = require("../controllers/userCtrl"); // CommonJS-style import

const router = express.Router();

router.post("/", userCtrl.createUser);

export default router;
