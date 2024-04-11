const express = require('express');
const medicationNotificationController = require('./controllers/medicationNotificationController');

const app = express();


medicationNotificationController.configureMedicationNotificationTask();


