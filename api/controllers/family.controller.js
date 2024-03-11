const FamilyModel = require("../models/family.model")
const UserModel = require("../models/user.model")

const getAllFamiliesUser = async (req, res) => {
    try {
        const families = await FamilyModel.findAll({ where: { id: res.locals.user.FamilyGroupId } })
        res.status(200).json(families)
    } catch (error) {
        res.status(500).send('Error', error.message)
    }
}

const getAllFamiliesAdmin = async (req, res) => {
    try {
        const families = await FamilyModel.findAll()
        res.status(200).json(families)
    } catch (error) {
        res.status(500).send('Error', error.message)
    }
}

const createFamily = async (req, res) => {
    try {
        const user = await UserModel.findByPk(res.locals.user.id)
        if (user.roleId == Null) {
            const family = await FamilyModel.create(req.body)

            user.roleId = 2
            user.save()

            return res.status(200).json({ message: 'User created', family: family })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send('Error creating family', error.message)
    }
}

const updateFamily = async (req, res) => {
    try {

        const oldFamily = await FamilyModel.findByPk(req.params.id);

        if (res.locals.user.roleId !== 1 && res.locals.user.FamilyGroupId !== oldFamily.id) return res.status(404).send('Unathorized')

        const [familyExists, family] = await FamilyModel.update(
            req.body, {
            return: true,
            where: {
                id: req.params.id
            }
        })
        if (familyExists !== 0) {
            return res.status(200).json({
                message: 'Family updated',
                family: family
            })
        } else {
            return res.status(404).send('Error updating family')
        }
    } catch (error) {
        return res.status(500).send('Error')
    }
}

const deleteFamilyUser = async (req, res) => {
    try {
        const family = await FamilyModel.destroy({
            where: {
                id: res.locals.user.FamilyGroupId
            }
        })
        if (family) {
            return res.status(200).send('Family deleted')
        } else {
            return res.status(404).send('Family not found')
        }
    } catch (error) {
        return res.status(500).send('Error')
    }
}

const deleteFamilyAdmin = async (req, res) => {
    try {
        const family = await FamilyModel.destroy({
            where: {
                id: req.params.id
            }
        })
        if (family) {
            return res.status(200).send('Family deleted')
        } else {
            return res.status(404).send('Family not found')
        }
    } catch (error) {
        return res.status(500).send('Error', error.message)
    }
}
module.exports = {
    getAllFamiliesUser,
    getAllFamiliesAdmin,
    createFamily,
    updateFamily,
    deleteFamilyUser,
    deleteFamilyAdmin,
}