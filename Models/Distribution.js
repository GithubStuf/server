const mongoose = require('mongoose');

const distributionSchema = new mongoose.Schema({
    Name:{
        type:String,
        required: true,
    },
    Role:{
        type:String,
        required:true,
    },
    Brand:{
        type:String,
        required:true,
    },
    PhoneNumber:{
        type: String,
    },
    Orders: [
        {
            name: {
                type: String,
            }
        }
    ],
    Date: {
        type: String, 
        required: true,},
    Wilaya:{
            type:String,
            required:true,
        },
    },
    {timestamps: true }
);


module.exports = mongoose.model("Distribution", distributionSchema);