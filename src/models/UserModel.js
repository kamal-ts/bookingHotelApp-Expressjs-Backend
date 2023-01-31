import {mongoose} from '../../deps.ts';

const {Schema} = mongoose;

const Users = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        default: "USER"
    },
    role: {
        type: String,
        require: true
    }
},
{
    timestamps: true
})

export default mongoose.model('User', Users)