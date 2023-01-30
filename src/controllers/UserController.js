import { PrismaClient } from '../../generated/client/deno/edge.js'
// import argon2 from "npm:argon2";
import {config} from "https://deno.land/std@0.163.0/dotenv/mod.ts"

const envVars = await config()

const prisma = new PrismaClient({
    datasources:{
        db: {
            url: envVars.DATABASE_URL
        }
    }
})

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
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password,
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