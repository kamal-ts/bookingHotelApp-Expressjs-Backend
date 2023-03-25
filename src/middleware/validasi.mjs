import { body } from 'express-validator';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const register = [
    body('username')
        .isLength({ min: 3 }).withMessage('username minimum of three characters')
        .custom(async (value) => {
            const user = await prisma.user.findFirst({
                where: {
                    username: value
                }
            });
            if(user){
                throw new Error('Username has been used')
            }
            return true;
        }),
    body('email')
        .isEmail().withMessage('invalid email')
        .custom(async (value) => {
            const user = await prisma.user.findFirst({
                where: {
                    email: value
                }
            });
            if(user){
                throw new Error('e-mail has been used')
            }
            return true;
        }),
    body('password').custom((value, { req }) => {
        if (value !== req.body.confPassword) {
            throw new Error('Password confirmation does not match password');
        }
        return true;
    })
];

const hotel = [
    body('type')
        .notEmpty().withMessage('Type cannot be empty'),
    body('city')
        .notEmpty().withMessage('City cannot be empty').isString().withMessage('City must be a string'),
    body('address')
        .notEmpty().withMessage('Address cannot be empty').isString().withMessage('Address must be a string'),
    body('distance')
        .notEmpty().withMessage('Distance cannot be empty').isString().withMessage('Distance must be a string'),
    body('title')
        .notEmpty().withMessage('title cannot be empty').isString().withMessage('title must be a string'),
    body('name')
        .notEmpty().withMessage('name cannot be empty').isString().withMessage('name must be a string'),
    body('desc')
        .notEmpty().withMessage('desc cannot be empty').isString().withMessage('desc must be a string'),
    body('rating')
        .notEmpty().withMessage('rating cannot be empty').isFloat({ min: 1.0, max: 9.9 }).withMessage('Minimum rating of 1 and maximum of 9'),
    body('cheapestPrice')
        .notEmpty().withMessage('Cheapest Price cannot be empty').isInt().withMessage('Cheapest Price must be a integer'),
    body('featured')
        .notEmpty().withMessage('Featured cannot be empty').isBoolean().withMessage('Featured must be a boolean'),

]

export default {
    register,
    hotel,
}
