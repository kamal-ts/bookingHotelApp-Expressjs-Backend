import { PrismaClient } from '@prisma/client'
import argon2 from 'argon2';

const prisma = new PrismaClient()

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
    const hasPassword = await argon2.hash(password);
    try {
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hasPassword,
                role
            }
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