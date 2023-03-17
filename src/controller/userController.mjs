import { PrismaClient } from '@prisma/client';
import argon2 from 'argon2';
import {validationResult} from 'express-validator';
import { createError } from '../utils/error.mjs';

const prisma = new PrismaClient();

export default {
    async getUser(_req, res, next) {
        try {
            const users = await prisma.user.findMany({
                select: {
                    id: true,
                    username: true,
                    email: true,
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
            next(error);
        }
    },

    async createUser(req, res, next) {
        const errorFormatter = ({ msg, param, value}) => {
            // Build your resulting errors however you want! String, object, whatever - it works!
            // return `${location}[${param}]: ${msg}`;
            return {[param]: {
                msg,
                value
            }}
        };
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
        const { username, email, password, confPassword } = req.body;
        if (password !== confPassword) {
            next(createError(400, "password dan confirm password tidak cocok"));
        }

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

    async getUsersById(req, res, next){
        try {
            const user = await prisma.user.findFirst({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).json({
                success: true,
                data: user
            })
        } catch (error) {
            next(error)
        }
    }
}
