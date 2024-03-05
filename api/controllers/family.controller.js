const FamilyModel = require("../models/family.model")

const getAllFamilies = async (req, res) =>{
    try {
        const families = await  FamilyModel.findAll()
        res.status(200).json(families)
    } catch (error) {
        res.status(500).send('Error', error.message)
    }
}

const getOneFamily = async (req, res) =>{
    try {
        const family = await FamilyModel.findByPk(req.params.id)
        if(family){
            res.status(200).json(family)
        }else {
            res.status(404).send('Family not found')
        }
    } catch (error) {
        return res.status(500).send('error', error.message)
    }
}

const createFamily = async (req, res) =>{
    try {
        const family = await FamilyModel.create(req.body)
        return res.status(200).json({message: 'User created', family: family})
    } catch (error) {
        return res.status(500).send('Error creating family', error.message)
    }
}

const updateFamily = async (req, res) =>{
    try {
        const [familyExists, family] = await FamilyModel.update(
            req.body,{
                return: true, 
                where: {
                    id: req.params.id
                }
            })
        if(familyExists !== 0){
            return res.status(200).json({
                message: 'Family updated', 
                family:family})
        }else {
            return res.status(404).send('Error updating family')
        }
    } catch (error) {
        return  res.status(500).send('Error', error.message)
    }
}

const deleteFamily = async (req, res) =>{
    try {
        const family = await FamilyModel.destroy({
            where:{
                id: req.params.id
            }
        })
        if(family){
            return res.status(200).send('Family deleted')
        }else{
            return res.status(404).send('Family not found')
        }
    } catch (error) {
        return res.status(500).send('Error', error.message)
    }
}
module.exports = {
    getAllFamilies,
    getOneFamily,
    createFamily,
    updateFamily,
    deleteFamily
}