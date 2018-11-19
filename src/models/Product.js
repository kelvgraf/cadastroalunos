const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    idade: {
        type: String,
        required: true,
    },
    polo: {
        type: String,
        required: true,
    },
    turno: {
        type: String,
        required: true,
    },
    data: {
        type: Date,
        default: Date.now,
    }
});

mongoose.model('Product', ProductSchema);