import { createError } from '../utils/error.mjs';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

export default {
    async getHotels(_req, res, next) {

        try{    
            const hotels = await prisma.hotel.findMany();
            return res.status(200).json(
                {
                    success: true,
                    data: hotels
                }
                );
        }catch (error) {
            next(error);
        }
    },

    async createHotel(req, res, next) {
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
        } = await req.body;
        
        
        if(!await prisma.user.findFirst({ where: { id: userId, role: "ADMIN"}})){
            return res.status(400).json(
                {
                    success : false,
                    message: "user not found"
                }
            );
        }
        
        try {
            const result = await prisma.hotel.create({
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

            return res.status(201).json(
                {
                    success: true,
                    data: result,
                    message: "Hotel created"
                }
            );
        } catch (error) {
            next(error);
        }
    },

    async getHotelsById(req, res, next){

        try {
            const hotel = await prisma.hotel.findFirst({
                where: {
                    id: Number(req.params.id)
                }
            })
            if (!hotel) {
                return next(createError(404, "Hotel not found"));
            }
            
            return res.status(200).json({
                success: true,
                data: hotel
            })
        } catch (error) {
            next(error);
        }
    },

    async deleteHotels(req, res, next){
        try{
            const deleting = await prisma.hotel.deleteMany({
                where: {
                    id: Number(req.params.id),
                },
            });

            // cek data yg dihapus
            if (deleting.count < 1) {
                return next(createError(404, "Hotel not found"));
            }
            
            res.status(200).json({
                success: true,
                message: "Hotel deleting",
            });
        }catch(error){
            next(error);
        }
    },
}