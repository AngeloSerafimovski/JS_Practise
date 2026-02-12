const Zemjodelie = require("../model/model");


const getAll = async (req, res) => {
    try {
        const data = await Zemjodelie.find();
        res.status(200).json(data);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: "Server error" });
    }
};


const create = async (req, res) => {
    try {
        const newItem = new Zemjodelie(req.body);
        await newItem.save();

        res.status(201).json(newItem);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = {
    getAll,
    create
};