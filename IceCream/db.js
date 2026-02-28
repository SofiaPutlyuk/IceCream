import mongoose from "mongoose"
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://putlyuksophia_db_user:kis0919kis@cluster0.a4mmx8v.mongodb.net/myDatabase?retryWrites=true&w=majority")
        console.log("MongoDB підключений успішно")
    } catch (error) {
        console.log("Error", error)
        process.exit(1)
    }
}

export default connectDB