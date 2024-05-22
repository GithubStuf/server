const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Distribution = require('../Models/Distribution');



//CREATE
const newDist =  async (req, res) => {
    const newDist = new Distribution(req.body);

    try {
        const savedDist = await newDist.save();
        res.status(200).json(savedDist);
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

const getAllDist = async (req, res) => {
    try {
        const distribution = await Distribution.find();
        res.status(200).json(distribution);
    } catch (error) {
        console.error("Error fetching :", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
}





module.exports = {
    newDist,
    getAllDist
};
