import { hashPassword } from "../Helper/PasswordHasingHelper.js";
import userModel from "../Models/userModel.js";

export const registerUser = async (req, res) => {
    try {
        const { phone, password, name } = req.body;
        console.log(phone,name,password);
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
        res.status(201).send({ success: true, message: 'Registered Successfully' ,user });
    } catch (error) {
        res.status(500).send({ success: false, message: 'Error in Server' });
    }
}