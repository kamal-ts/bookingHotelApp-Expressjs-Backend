import { PrismaClient } from '@prisma/client';
import argon2 from 'argon2';
import {validationResult} from 'express-validator';

const prisma = new PrismaClient();

export default {
    async getUser(_req, res) {
        try {
            const users = await prisma.user.findMany({
                select: {
                    id: true,
                    username: true,
                    email: true,
                    hotel: true,
                    role: true,
                },
            });

            return res.status(200).json(
                {
                    success: true,
                    data: users
                }
            );
        } catch (error) {
            res.status(500).json(
                {
                    success: false,
                    message: error.message
                }
            );
        }
    },

    async createUser(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { username, email, password, confPassword } = req.body;
        if (password !== confPassword) {
            return res.status(400).json(
                {
                    success: false,
                    message: "password dan confirm password tidak cocok"
                }
            );
        }
        const hasPassword = await argon2.hash(password);
        try {
            const user = await prisma.user.create({
                data: {
                    username,
                    email,
                    password: hasPassword,
                    role,
                },
            });

            return res.status(201).json(
                {
                    success: true,
                    data: user,
                    message: "Register Berhasil"
                }
            );
        } catch (error) {
            res.status(400).json(
                {
                    success: false,
                    message: error.message
                }
            );
        }
    }

}
