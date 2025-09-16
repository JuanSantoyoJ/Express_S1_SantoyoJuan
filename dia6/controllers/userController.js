import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "../models/userModel";

export default class UserController {
    constructor() {
        this.UserModel = new this.UserModel();
    }
    async register(req, res) {
        try {
            const { name, email, password } = req.body;
            const existingUser = await this.UserModel.findUserByEmail(email);
            if (existingUser) {
                return res.status(400).json({
                    msg: "El usuario ya existe."
                });
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await this.UserModel.createUser({
                name,
                email,
                password: hashedPassword
            });
            return res.status(201).json({
                msg: "Creado con exito", newUser
            })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
    async login(req, res) {
        try {
            const { name, email, password } = req.body;
            const existingUser = await this.UserModel.findUserByEmail(email);

            if (!existingUser) {
                return res.status(404).json({
                    msg: "Usuario inexistente"
                })
            }

            const validPassword = await bcrypt.compare(password, existingUser.password);
            if (!validPassword) {
                return res.status(401).json({
                    msg: "Contraseña invalida"
                })
            }

            const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, {
                expiresIn: process.env.JWT_EXPIRES
            });
            res.status(202).json({
                msg: "Login exitoso",
                token
            })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
    async updateUser(req,res){
        try {
            const {id} = req.user;
            const {name,email} = req.body;

            await this.UserModel.updateUser(id,{name,email});
            res.status(200).json({
                msg:"Usuario actualizado con exito!!!"
            })
        } catch (error) {
            res.status(500).json({error:error.message})
        }
    }
    async updatePassword(req,res){
        try {
            const {id} = req.user;
            const {password} = req.body;

            const hashedPassword = await bcrypt.hash(password,10);
            await this.UserModel.updateUser(id,{password:hashedPassword})
            res.status(200).json({
                msg:"Usuario actualizado con exito!!!"
            })
        } catch (error) {
            res.status(500).json({error:error.message})
        }
    }
}