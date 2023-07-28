import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timeStamps: true });

const userModel = mongoose.model('users', userSchema);

export default userModel;