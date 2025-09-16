import express from "express";
import jwt from "jsonwebtoken";
import UserController from "../controllers/userController";
import dotenv from "dotenv";


const router = express.Router();
const userController = new userController();

function authMiddleware(req, res, next) {
    const token = req.headers["authorization"]?.split(" ")[1];
    if (!token) return res.status(403).json({ msg: "Token requerido" })
    jwt.verify(token, process.env.JWT_SECRET, (err, coded) => {
        if (error) return res.status(401).json({
            msg: "Token invalido"
        })
        req.user = decoded;
        next();
    })
}

//Rutas publicas
router.post("/register",(req,res)=> userController.register(req,res));
router.delete("/login",(req,res)=> userController.login(req,res))
//Rutas protegidas
router.put("/update",authMiddleware,(req,res)=> userController.updateUser(req,res));
router.put("update-password",authMiddleware,(req,res)=> userController.updatePassword(req,res));

export default router;