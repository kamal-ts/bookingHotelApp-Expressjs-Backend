import Hotel from '../models/HotelModel.mjs'

export const getHotel = async (req, res) => {
    try {
        const hotels = await Hotel.find()
        res.status(200).json(hotels);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getHotelById = async (req, res) => {


}

export const createHotel = async (req, res) => {
}

export const updateHotel = async (req, res) => {

}

export const deleteHotel = async (req, res) => {

}