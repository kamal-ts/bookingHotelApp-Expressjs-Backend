import User from '../models/UserModel.mjs'

export const getUser = async (req, res) => {

}

export const getUserById = async (req, res) => {

}

export const createUser = async (req, res) => {
    const {
        name,
        email,
        password,
        confPassword,
        role = "USER"
    } = req.body;
    if (password !== confPassword) return res.status(400).json({ message: "password dan confirm password tidak cocok" });
    // const hasPassword = await argon2.hash(password);
    try {
        const user = await User.create({
                name,
                email,
                password,
                role
        });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const updateUser = async (req, res) => {

}

export const deleteUser = async (req, res) => {

}