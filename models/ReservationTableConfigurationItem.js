// NightTable, LLC has been granted a license by John Nydam 
// to use this document and the information contained in it 
// for business objectives pertinent to the company. 
// It must not be copied, duplicated, or used in any manner, 
// or transmitted to others without the written consent of John Nydam. 
// It must be returned to John Nydam when its authorized use is terminated.

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reservationTableConfigurationItemSchema = new Schema({
    tableConfigurationId: {
        type: Schema.Types.ObjectId,
        ref: 'TableConfiguration',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    reservationId: {
        type: Schema.Types.ObjectId,
        ref: 'Reservation',
        required: true
    },
    tableClubDayIdentifierIds: [{
        type: Schema.Types.ObjectId,
        ref: 'TableClubDayIdentifier',
        required: true
    }]
});


module.exports = mongoose.model('ReservationTableConfigurationItem', reservationTableConfigurationItemSchema); 