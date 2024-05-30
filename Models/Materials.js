const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    category: {
        type: String,
        required: true,
    },
    specifications: {
        type: [String],
        unique: true,
    },
    securityStock: {
        type: Number,
        required: true,
    },
    quantityAvailable: {
        type: Number,
        required: true,
    },
    inStock: {
        type: Boolean,
        required: true,
        default: true,
    },
},
    { timestamps: true }
);


module.exports = mongoose.model("Materials", materialSchema);
