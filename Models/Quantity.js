const mongoose = require('mongoose');

const quantitySchema = new mongoose.Schema({
    date:{
        type:String,
        required: true,
    },
    reference: [
        {
            productName: {
                type: String,
            }
        }
    ],
    brand: {
        type: String, 
        required: true,},
    quantity: [
        {
            ctn:{
                type: Number, 
                required: true,
            }
        }
    ],
    },
    {timestamps: true }
);


module.exports = mongoose.model("Quantity", quantitySchema);