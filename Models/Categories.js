const mongoose = require('mongoose');

const categoriesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    subCategory: {
        type: [String],
        required: true,
        unique: true,
    },
},
    { timestamps: true }
);


module.exports = mongoose.model("Category", categoriesSchema);
