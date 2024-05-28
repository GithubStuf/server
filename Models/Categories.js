const mongoose = require('mongoose');

const categoriesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    specifications: {
        type: [String],
        unique: true,
    },
},
    { timestamps: true }
);


module.exports = mongoose.model("Category", categoriesSchema);
