import mongoose from "mongoose";

const connectDB= async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("Successfully Connected to Database", conn.connection.host)
    } catch (error) {
        console.error(`Error in Connecting Database: ${error.message}`)
    }
}

export default connectDB;