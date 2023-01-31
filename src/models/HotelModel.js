import {mongoose} from '../../deps.ts';

const {Schema} = mongoose;



const Photo = Schema({
    name: String,
    hotelId: String
})

const Room = Schema({
    name: {
        type: String,
        unique: true,
        require: true
    },
    status: {
        type: Boolean,
        default: false
    },
    hotelId: {
        type: String,
        require: true
    }
},
{
    timestamps: true
})

const Hotels = Schema({
    type: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    distance: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true,
        unique: true
    },
    desc: {
        type: String,
        require: true
    },
    rating: {
        type: Number,
        default: 0
    },
    cheapestPrice: {
        type: Number,
        require: true
    },
    featured: {
        type: Boolean,
        default: false
    },
    userId: {
        type: String,
        require: true
    },
    photos: [Photo],
    rooms: [Room],
},
{
    timestamps: true
})


export default mongoose.model('Hotel', Hotels)