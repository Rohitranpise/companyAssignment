const Category = require("../models/category.model")

const getAllCategory = async (req, res) => {
    try {
        const data = await Category.find();
        res.status(200).send(data)
    } catch (error) {
        res.status(401).send(error)
    }
}

const getOneById = async (req, res) => {
    const _id = req.params.id
    try {
        const data = await Category.findById(_id)
        res.status(200).send(data)
    } catch (error) {
        res.status(401).send(error)
    }
}

const createCategory = async (req, res) => {
    console.log(req.body)
    const createData = new Category({
        category_name: req.body.category_name
    })
    try {
        let data = await createData.save();
        res.status(201).send(data)
    } catch (error) {
        res.status(400).send(error)
    }
}


const removeCategory = async (req, res) => {
    const _id = req.params.id
    try {
        const deleteCategory = await Category.findByIdAndDelete(_id)
        res.status(200).send({ message: `item deleted!` })
    } catch (error) {
        res.status(400).send(error)
    }
}

const updateCategory = async (req, res) => {
    const _id = req.params.id
    try {
        const update = await Category.findByIdAndUpdate(_id, req.body, {
            new: true
        })
        res.status(200).send(update)
    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = {
    getAllCategory, createCategory,
    removeCategory, getOneById,
    updateCategory
}