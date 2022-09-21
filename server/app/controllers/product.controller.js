const Product = require("../models/product.model");

const createProduct = async (req, res) => {
    const createData = new Product({
        productName: req.body.productName,
        CategoryId: req.body.CategoryId
    })
    try {
        const data = await createData.save()
        res.status(201).send(data)
    } catch (error) {
        res.status(400).send(error)
    }
}

const getById = async (req, res) => {
    const _id = req.params.id
    try {
        const data = await Product.findById(_id)
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error)
    }
}

const getAll = async (req, res) => {
    try {
        const data = await Product.find()
        .populate("CategoryId",  "category_name")
        .exec()
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error)
    }
}

const updateProduct = async (req, res) => {
    const _id = req.params.id
    try {
        const data = await Product.findByIdAndUpdate(_id, req.body, {
            new: true
        })
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error)
    }
}

const deleteProduct = async (req, res) => {
    const _id = req.params.id
    try {
        const data = await Product.findByIdAndDelete(_id)
        res.status(200).send({ message: `product deleted!` })
    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = {
    createProduct, getById,
    getAll, updateProduct, deleteProduct
}