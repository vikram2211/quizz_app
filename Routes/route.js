// const express = require("express");
// const router = express.Router();
// const controller = require("../controllers/controller");

// //questions endpoints
// router.get("/questions", controller.getQuestions);
// router.post("/questions", controller.addQuestions);
// router.delete("/questions", controller.deleteQuestions);

// //Result endpoints
// router.post("/results", controller.saveResult);
// router.get("/results", controller.getAllResult);
// router.delete("/results", controller.deleteResult);

// module.exports = router;


import { Router } from "express";
const router = Router();

/** import controllers */
import * as controller from '../controllers/controller.js';

/** Questions Routes API */

router.route('/questions')
        .get(controller.getQuestions) /** GET Request */
        .post(controller.insertQuestions) /** POST Request */
        .delete(controller.dropQuestions) /** DELETE Request */

router.route('/result')
        .get(controller.getResult)
        .post(controller.storeResult)
        .delete(controller.dropResult)

export default router;