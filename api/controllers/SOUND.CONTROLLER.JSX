
const cron = require('node-cron');
const textToSpeechService = require('../services/textToSpeechService');
const MedicationModel = require('../models/medication.model');


function configureMedicationNotificationTask() {
    cron.schedule('*/5 * * * *', async () => {
        try {
            const currentTime = new Date();

            
            const medications = await MedicationModel.findAll({
                where: {
                    medicationTime: {
                        [Op.between]: [currentTime, new Date(currentTime.getTime() + 5 * 60000)] 
                    }
                }
            });

            
            for (const medication of medications) {
                const medicationInfo = `¡Hola! Es hora de tomar tu medicación. Recuerda tomar  ${medication.name}.`;
                const voiceMessage = await textToSpeechService.generateVoiceMessage(medicationInfo);

                
                
                
            }
        } catch (error) {
            console.error('Error in cron job:', error);
        }
    });
}

module.exports = {
    configureMedicationNotificationTask
};
