import { Request, Response } from "npm:express@^4.18.2";
import db from "../utils/Databases.ts";
import { hash } from "../../deps.ts";

export const getUser = async (_req: Request, res: Response) => {
    try {
        const users = await db.user.findMany({
            select: {
                id: true,
                username: true,
                email: true,
                hotel: true,
                role: true,
            },
        });
        res.status(200).json({
            success: true,
            data: users,
        });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// export const getUserById = async (req, res) => {

// }

export const createUser = async (req: Request, res: Response) => {
    const { username, email, password, confPassword, role } = req.body;
    if (password !== confPassword)
        return res
            .status(400)
            .json({ message: "password dan confirm password tidak cocok" });
    const hasPassword = await hash(password);
    try {
        const user = await db.user.create({
            data: {
                username,
                email,
                password: hasPassword,
                role,
            },
        });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// export const updateUser = async (req, res) => {

// }

// export const deleteUser = async (req, res) => {

// }
