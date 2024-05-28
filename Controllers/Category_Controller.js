const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Category = require('../Models/Categories')

const newCategory = async (req, res) => {
    try {
        // const {
        //     name,
        //     category,
        //     subCategory,
        //     quantity,
        //     quantityInStock,
        //     inStock
        // } = req.body;

        const material = new Category(req.body);

        const savedCategory = await material.save();
        res.status(200).json(savedCategory);
    } catch (error) {
        res.status(500).json(error);
    }
}
//
// const updateMaterial = async (req, res) => {
//     if (req.body.password) {
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(req.body.password, salt);
//     }
//     try {
//         const updateMaterial = await Materials.findByIdAndUpdate(req.params.id, {
//             $set: req.body
//         }, { new: true });
//         res.status(200).json(updateMaterial)
//     } catch (err) { res.status(500).json(err) }
// }

// const deleteMaterial = async (req, res) => {
//     try {
//         await Materials.findByIdAndDelete(req.params.id);
//         res.status(200).json('Material deleted successfully!')
//     } catch (err) {
//         res.status(500).json(err)
//     }
// }

// const findMaterialById = async (req, res) => {
//     try {
//         const Material = await Materials.findById(req.params.id);
//         const { material } = Material._doc;
//         res.status(200).json({ material });
//     } catch (err) {
//         res.status(500).json(err)
//     }
// }
//
const getAllCategories = async (req, res) => {

    try {
        const category = await Category.find();

        res.status(200).json(category);
    } catch (err) {
        res.status(500).json({ message: "An error occurred fetching categories\n" + err });
    }
};




module.exports = {
    newCategory,
    getAllCategories,
};
