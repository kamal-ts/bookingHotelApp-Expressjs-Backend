import { Request, Response } from '../../deps.ts'
import db from "../utils/Databases.ts";
import { hash } from "../../deps.ts";

// create type req, res
type myCtx = {
    request: Request,
    response: Response,
    params: { id: string }
};


export default {
    async getUser({ response }: myCtx) {
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

            response.status = 200;
            response.body = {
                success: true,
                data: users
            };
            return;
        } catch (error) {
            response.status = 404;
            response.body = {
                success: false,
                message: error.message
            };
        }
    },

    async createUser({ request, response }: myCtx) {
        if (!request.hasBody) {
            response.status = 400;
            response.body = {
                success: false,
                message: "No data provided",
            };
            return;
        }

        const { username, email, password, confPassword, role } = await request.body().value;
        if (password !== confPassword) {
            response.status = 400
            response.body = {
                success: false,
                message: "password dan confirm password tidak cocok"
            }
            return;
        }
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
            response.status = 201;
            response.body = {
                success: true,
                data: user
            }
            return;
        } catch (error) {
            response.status = 400
            response.body = {
                success: false,
                message: error.message
            }
        }
    }

}
