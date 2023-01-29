import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getHotel = async (req, res) => {
    try {
        const hotels = await prisma.hotel.findMany({
            include:{
                photos: true,
                rooms: true,
                _count: true
            }
        });
        res.status(200).json(hotels);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getHotelById = async (req, res) => {


}

export const createHotel = async (req, res) => {
    const {
        name,
        type,
        city,
        address,
        distance,
        title,
        desc,
        cheapestPrice,
        userUuid,
    } = req.body;

    try {
        const hotel = await prisma.hotel.create(
            {
                data: {
                    name,
                    type,
                    city,
                    address,
                    distance,
                    title,
                    desc,
                    cheapestPrice,
                    userUuid,
                }
            });
        res.status(201).json(hotel);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const updateHotel = async (req, res) => {

}

export const deleteHotel = async (req, res) => {

}