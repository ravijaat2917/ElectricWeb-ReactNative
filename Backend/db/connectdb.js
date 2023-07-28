import mongoose from "mongoose";

export const connectDb = async(URI) => {
    try {
        await mongoose.connect(URI);
        console.log('Database Connected Successfully');
    } catch (error) {
        console.log(error);
    }
}