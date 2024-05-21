const mongoose = require('mongoose');

const quantitySchema = new mongoose.Schema({
    date:{
        type:String,
        required: true,
    },
    Reference: [
        {
            productId: {
                type: String,
            },
            productName: {
                type: String,
            },
            quantity: {
                type: Number,
                default:1,
            }
        }
    ],
    Brand: {
        type: String, 
        required: true,},
    quantity: {
        type: Number, 
        required: true,},
    },
    {timestamps: true }
);


module.exports = mongoose.model("Quantity", quantitySchema);