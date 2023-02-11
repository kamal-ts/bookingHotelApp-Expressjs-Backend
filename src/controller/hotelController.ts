import { Request, Response } from '../../deps.ts'
import db from "../utils/Databases.ts";

// create type req, res
type myCtx = {
    request: Request,
    response: Response,
    params: { id: string }
};

export default {
    async getHotels({ response }: myCtx) {
        const hotels = await db.hotel.findMany();
        response.status = 200;
        response.body = {
            success: true,
            data: hotels
        };
        return;
    },

    async createHotel({ request, response }: myCtx) {
        const {
            name,
            type,
            city,
            address,
            distance,
            title,
            desc,
            cheapestPrice,
            userId
        } = await request.body().value;
        
        
        if(!await db.user.findFirst({ where: { id: userId}})){
            response.status = 400;
            response.body = {
                success : false,
                message: "userid not found"
            };
            return;
        }
        
        try {
            const result = await db.hotel.create({
                data: {
                    name,
                    type,
                    city,
                    address,
                    distance,
                    title,
                    desc,
                    cheapestPrice,
                    userId
                }
            });

            response.status = 201;
            response.body = {
                success: true,
                data: result,
                message: "Hotel created"
            }
            return;
        } catch (error) {
            response.status = 400;
            response.body = {
                success: false,
                message: error.message
            }
        }
    }
}