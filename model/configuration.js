import mongoose from 'mongoose';
import "dotenv/config"

const connectionString = process.env.DATABASE


export const connectDatabase = async () => {
    try {
        await mongoose.connect(connectionString)
        console.log("Database connected")
    } catch (error) {
        console.log("Database did not connect")
        process.exit()
    }
}
