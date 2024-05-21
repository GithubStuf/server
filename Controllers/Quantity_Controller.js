const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Quantity = require('../Models/Quantity');


//CREATE
const newQty =  async (req, res) => {
    const newQty = new Quantity(req.body);

    try {
        const savedQty = await newQty.save();
        res.status(200).json(savedQty);
    } catch (error) {
        res.status(500).json(error)
    }
};

/*GET USER ORDER
const getUserOrders = async (req, res)=>{
    try{
        const orders = await Orders.find({userId: req.params.userId});
        res.status(200).json({orders});
    }catch(err){
        res.status(500).json(err)
    }
};*/

const getAllQty = async (req, res) => {
    try {
        const quantity = await Quantity.find();
        res.status(200).json(quantity);
    } catch (error) {
        console.error("Error fetching :", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
}





module.exports = {
    newQty,
    getAllQty
};
