import mongoose from "mongoose";

export class Database {
    constructor(uri) {
        this.uri = uri;
    }
    async connect() {
        try {
            mongoose.set("strictQuery", true);
            await mongoose.connect(this.uri);
            console.log("MongoDB conectado")
        } catch (error) {
            console.log("Error: " + error.message)
        }
    }
    async disconnect() {
        try {
            await mongoose.disconnect();
            console.log("conexion exitosa")
        } catch (error) {
            console.log("Error: " + error.message)
        }
    }
}