const MedicationModel = require('../models/medication.model')

const getAllMedications = async (req, res)=> {
    try {
        const medication = await MedicationModel.findAll()
        if(medication.length === 0)res.status(404).send('No medication avaliable')
        res.status(200).json(medication)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const getOneMedication = async (req, res) =>{
   try {
    const medication = await MedicationModel.findByPk(req.params.id)
    if(medication){
        return res.status(200).json(medication)
    }else{
        return res.status(404).send('Medication not found.')
    }
   } catch (error) {
    return res.status(500).send(error.message)
   }
}

const createMedication = async (req, res) =>{
    try {
        const medication = await MedicationModel.create(req.body)
        res.status(200).json(medication)
    } catch (error) {
        res.status(500).send('Error creating medication. Try again later.')
    }
}

const updateMedication = async (req, res) => {
    try {
        const [medicationExist, medication]= await MedicationModel.update(
            req.body, {
                returning: true, 
                where:{
                    id: req.params.id
                }
            }
        )
        if(medicationExist !== 0){
            return res.status(200).json({
                message: 'Medication updated.',
            medication: medication})
        }else{
            return res.status(404).send('Medication not found')
        }
    } catch (error) {
        res.status(500).send(error.message, 'Cannot find this medication.')
    }
}

const deleteMedication = async (req, res) =>{
    try {
        const medication = await MedicationModel.destroy({
            where: {
                id: req.params.id
            }
        })
        if(medication){
            return res.status(200).json('Medication deleted')
        }else {
            return res.status(404).send('Medication not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports= {
    getAllMedications,
    getOneMedication, 
    createMedication,
    updateMedication, 
    deleteMedication
}