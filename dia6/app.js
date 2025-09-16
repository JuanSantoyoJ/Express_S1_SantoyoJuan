import express from "express";
import dotenv from "dotenv";
import routes from "./views/userRoutes"

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api',routes);
const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log("Funciona")
})
