import { PrismaClient } from '@prisma/client';
import argon2 from 'argon2';
import { validationResult } from 'express-validator';
import { createError } from '../utils/error.mjs';

const prisma = new PrismaClient();

const errorFormatter = ({ msg, param, value }) => {
    return {
        [param]: {
            msg,
            value
        }
    }
};

export default {
    async getUser(_req, res, next) {
        try {
            const users = await prisma.user.findMany({
                select: {
                    id: true,
                    username: true,
                    email: true,
                    role: true,
                    hotel: true
                },
            });
            return res.status(200).json(
                {
                    success: true,
                    data: users
                }
            );
        } catch (error) {
            next(error);
        }
    },

    async createUser(req, res, next) {

        const errors = validationResult(req).formatWith(errorFormatter);
        if (!errors.isEmpty()) {
            return res.status(400).json(
                {
                    success: false,
                    message: "invalid validation",
                    errors: errors.array()
                });
        }

        const { username, email, password } = req.body;

        const hasPassword = await argon2.hash(password);
        try {
            const user = await prisma.user.create({
                data: {
                    username,
                    email,
                    password: hasPassword,
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
            next(error);
        }
    },

    async updateUser(req, res, next) {
        const errors = validationResult(req).formatWith(errorFormatter);
        // const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(
                {
                    success: false,
                    message: "invalid validation",
                    errors: errors.array()
                });
        }

        const { username, email, password } = req.body;
        const id = req.params.id;
        const user = await prisma.user.findFirst({
            where : {
                id
            }
        });
        // cek data user
        if (!user) return next(createError(404, "User not found"));

        let hasPassword;
        // cek apakah user mengirimkan pasword
        if (password === "" || password === null) {
            hasPassword = user.password;
        } else {
            hasPassword = await argon2.hash(password)
        }

        try {
            const user = await prisma.user.update({
                data: {
                    username,
                    email,
                    password: hasPassword,
                },
                where: {
                    id
                }
            });
            return res.status(200).json(
                {
                    success: true,
                    data: user,
                    message: "User Updated"
                }
            );
        } catch (error) {
            next(error);
        }
    },

    async getUsersById(req, res, next) {
        try {
            // get data user
            const user = await prisma.user.findFirst({
                where: {
                    id: req.params.id
                },
                select: {
                    id: true,
                    username: true,
                    email: true,
                    role: true,
                },
            })
            // cek data user
            if (!user) {
                return next(createError(404, "User not found"));
            }
            // respon
            res.status(200).json({
                success: true,
                data: user
            })
        } catch (error) {
            next(error)
        }
    },

    async deleteUsers(req, res, next) {
        try {
            const deleting = await prisma.user.deleteMany({
                where: {
                    id: String(req.params.id),
                },
            });

            // cek user yg terhapus
            if (deleting.count < 1) {
                return next(createError(404, "User not found"));
            }

            res.status(200).json({
                success: true,
                message: "User Deleted",
            });
        } catch (error) {
            next(error);
        }
    },

}
