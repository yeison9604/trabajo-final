const jwt = require("jsonwebtoken")
const bcryptjs = require("bcryptjs")
const conexion = require("src/config")
const {promisify} = require("util")


exports.registro = async (req, res) =>{
    const name = req.body.name
    const user = req.body.user
    const pass = req.body.pass
    console.log(name + "-" + user + "-" + pass)
}