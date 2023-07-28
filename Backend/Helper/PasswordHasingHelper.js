import bcrypt from 'bcryptjs';

export const hashPassword = async (password, salt) => {
    try {
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    } catch (error) {
        console.log(error);
    }
}

export const matchPassword = async (password, hashedPassword) => {
    try {
        return await bcrypt.compare(password, hashedPassword);
    } catch (error) {
        console.log(error);
    }
}