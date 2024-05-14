const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Materials = require('../Models/Materials');


const newMaterial = async (req, res) => {
    try {
        const {
            name,
            category,
            subCategory,
            quantity,
            quantityInStock,
            inStock
        } = req.body;

        const material = new Materials({
           name: name,
           category:category,
           subCategory:subCategory,
           quantity:quantity,
           quantityInStock:quantityInStock,
           inStock:inStock
        });

        const savedMaterial = await material.save();
        res.status(200).json(savedMaterial);
    } catch (error) {
        res.status(500).json(error);
    }
}
const updateMaterial = async (req, res) => {
    if (req.body.password) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
    }
    try {
        const updateMaterial = await Materials.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true });
        res.status(200).json(updateMaterial)
    } catch (err) { res.status(500).json(err) }
}

const deleteMaterial = async (req, res) => {
    try {
        await Materials.findByIdAndDelete(req.params.id);
        res.status(200).json('Material deleted successfully!')
    } catch (err) {
        res.status(500).json(err)
    }
}

const findMaterialById = async (req, res) => {
    try {
        const Material = await Materials.findById(req.params.id);
        const { material } = Material._doc;
        res.status(200).json({ material });
    } catch (err) {
        res.status(500).json(err)
    }
}

const getAllMaterials = async (req, res) => {

    try {
        const materials = await Materials.find();

        res.status(200).json({ materials });
    } catch (err) {
        res.status(500).json({ message: "An error occurred fetching material\n" + err });
    }
};




module.exports = {
    newMaterial,
    updateMaterial,
    deleteMaterial,
    findMaterialById,
    getAllMaterials,
};
