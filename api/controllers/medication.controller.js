
const MedicationModel = require('../models/medication.model')
const UserModel = require('../models/user.model')
const { Op } = require('sequelize')

const getAllMedicationsUser = async (req, res) => {
    try {

        const medication = await MedicationModel.findAll({ where: { userId: res.locals.user.id }, })

        const user = await UserModel.findAll({
            where: { FamilyGroupId: res.locals.user.FamilyGroupId },
            attributes: { exclude: ["password", "email", "createdAt", "updatedAt"] },
            include: [{
                model: MedicationModel,
            }]
        })
        if (user.id == medication.userId) {
            if (medication.length === 0) return res.status(404).send('No medication avaliable')
            res.status(200).json(user)
        }

    } catch (error) {
        res.status(500).send(error)
    }
}

const getAllMedicationsAdmin = async (req, res) => {
    try {
        const medication = await MedicationModel.findAll({
            include: [{
                model: UserModel,
                attributes: { exclude: ["password", "email", "nss", "createdAt", "updatedAt"] }
            }]
        })
        if (medication.length === 0) res.status(404).send('No medication avaliable')
        res.status(200).json(medication)
    } catch (error) {
        res.status(500).send(error)
    }
}


const getOneMedicationUser = async (req, res) => {
    try {
        const medication = await MedicationModel.findOne({
            where: {
                userId: res.locals.user.id,
                id: req.params.id
            }
        })
        if (medication) {
            return res.status(200).json(medication)
        } else {
            return res.status(404).send('Medication not found.')
        }
    } catch (error) {
        return res.status(500).send(error)
    }
}



const getOneMedicationAdmin = async (req, res) => {
    try {
        const medication = await MedicationModel.findByPk(req.params.id)
        if (medication) {
            return res.status(200).json(medication)
        } else {
            return res.status(404).send('Medication not found.')
        }
    } catch (error) {
        return res.status(500).send(error)
    }
}


const createMedicationUser = async (req, res) => {
    try {

        if (!req.body.userId) {           
            req.body.userId = res.locals.user.id;
        }
        const oldUser = await UserModel.findOne({ where: { id: req.body.userId } })
  
       if (res.locals.user.roleId !== 2 && res.locals.user.FamilyGroupId !== oldUser.dataValues.FamilyGroupId) return res.status(404).send('Unathorized')
        const medication = await MedicationModel.create(req.body)
        res.status(200).json(medication)
    } catch (error) {
        res.status(500).send(error)
    }
}
const createMedicationAdmin = async (req, res) => {
    try {
        const medication = await MedicationModel.create(req.body)
        res.status(200).json(medication)
    } catch (error) {
        res.status(500).send(error)
    }
}

const updateMedication = async (req, res) => {
    try {

        const oldMedication = await MedicationModel.findByPk(req.params.id);
        const oldUser = await UserModel.findByPk(oldMedication.userId)
        if (res.locals.user.roleId !== 1 && res.locals.user.FamilyGroupId !== oldUser.FamilyGroupId) return res.status(404).send('Unathorized')

        const [medicationExist, medication] = await MedicationModel.update(
            req.body, {
            returning: true,
            where: {
                id: req.params.id
            }
        }
        )
        if (medicationExist !== 0) {
            return res.status(200).send({
                message:'Medication updated.'}
                
            )
        } else {
            return res.status(404).send('Medication not found')
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteMedication = async (req, res) => {
    try {

        const oldMedication = await MedicationModel.findByPk(req.params.id);
        const oldUser = await UserModel.findByPk(oldMedication.userId)
        if (res.locals.user.roleId !== 1 && res.locals.user.FamilyGroupId !== oldUser.FamilyGroupId) return res.status(404).send('Unathorized')

        const medication = await MedicationModel.destroy({
            where: {
                id: req.params.id
            }
        })
        if (medication) {
            return res.status(200).json('Medication deleted')
        } else {
            return res.status(404).send('Medication not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const addUserMedication = async (req, res) => {
    try {
        const user = await UserModel.findByPk(req.params.id)
        const medication = await MedicationModel.findByPk(req.params.mid)
        const newmedication = await user.addMedication(medication)
        res.status(200).send(`medication linked to ${user.name}`)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

const removeUserMedication = async (req, res) => {
    try {
        const user = await UserModel.findByPk(req.params.id)
        const medication = await MedicationModel.findByPk(req.params.mid)
        const newmedication = await user.removeMedication(medication)
        res.status(200).send(`medication unlinked to ${user.name}`)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

const getMedToday = async (req, res) => {

    const currentDate = new Date();
    const startOfDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 0, 0, 0);
    const endOfDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 23, 59, 59);
    
    try {
        const medication = await MedicationModel.findAll({
            where: {
                userId: res.locals.user.id,
                datetime: { [Op.between]: [startOfDay, endOfDay] }      
            }
        })
        res.status(200).json(medication)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error to get medication today')

    }
}

module.exports = {
    getAllMedicationsUser,
    getAllMedicationsAdmin,
    getOneMedicationUser,
    getOneMedicationAdmin,
    createMedicationUser,
    createMedicationAdmin,
    updateMedication,
    deleteMedication,
    addUserMedication,
    removeUserMedication,
    getMedToday
}