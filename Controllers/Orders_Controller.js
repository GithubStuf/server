const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Orders = require('../Models/Orders');


//CREATE
const newOrder =  async (req, res) => {
    const newOrder = new Orders(req.body);

    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
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

const getAllOrders = async (req, res) => {
    try {
        const orders = await Orders.find();
        res.status(200).json(orders);
    } catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
}





module.exports = {
    newOrder,
    getUserOrders,
    getAllOrders
};
