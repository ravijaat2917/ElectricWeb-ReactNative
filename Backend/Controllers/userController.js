import { hashPassword, matchPassword } from "../Helper/PasswordHasingHelper.js";
import userModel from "../Models/userModel.js";

export const registerUser = async (req, res) => {
    try {
        const { phone, password, name } = req.body;
        console.log(phone, name, password);
        if (!phone || !password || !name) {
            return res.status(400).send({ success: false, message: 'All Fields are mendatory' });
        }
        // Check ExistingUser
        const ExistingUser = await userModel.findOne({ phone });
        if (ExistingUser) {
            return res.status(400).send({ success: false, message: 'Already User Please Login' });
        }
        const hashedPassword = await hashPassword(password, 10);
        const user = await new userModel({
            name, phone, password: hashedPassword
        }).save();
        res.status(201).send({ success: true, message: 'Registered Successfully', user });
    } catch (error) {
        res.status(500).send({ success: false, message: 'Error in Server' });
    }
}

export const loginUser = async (req, res) => {
    try {
        const { phone, password } = req.body;
        const user = await userModel.findOne({ phone });
        if (!user) {
            return res.status(400).send({ success: false, message: 'User Not Registered' });
        }
        const matched = await matchPassword(password, user.password);
        if (!matched) {
            return res.status(400).send({ success: false, message: 'Phone and password not matched' });
        }
        res.status(200).send({ success: true, message: 'Login Successfully', user });
    } catch (error) {
        // console.log(error);
    }
}