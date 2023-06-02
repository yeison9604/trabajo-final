import { Express } from "express";
import indexController from "./index.controller";


const express = require("express");
const router = express.Router();



router.get("/", (req, res) =>{
    res.render("login");
});
router.get("/index", (req, res) =>{
    res.render("index");
});

router.get('/login/', indexController.login)

router.get('/registro/', indexController.registro)





module.exports = router;