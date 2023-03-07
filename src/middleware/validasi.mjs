import {body, validationResult} from 'express-validator';

const register = [
    body('username')
        .isLength({min: 3}).withMessage('username minimum of three characters'),
    body('email')
        .isEmail().withMessage('invalid email')
];

export default {
    register,
}
