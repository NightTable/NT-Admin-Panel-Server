// NightTable, LLC has been granted a license by John Nydam 
// to use this document and the information contained in it 
// for business objectives pertinent to the company. 
// It must not be copied, duplicated, or used in any manner, 
// or transmitted to others without the written consent of John Nydam. 
// It must be returned to John Nydam when its authorized use is terminated.

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    transactionType: {
        type: String,
        required: true
    },
    customerId: {
        type: Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    amount: {
        type: Number, 
        required: true
    },
    transactionCreatedDate: {
        type: Date,
        required: true
    },
    numTablesPurchased: {
        type: Number,
        required: true
    },
    reservationId: {
        type: Schema.Types.ObjectId,
        ref: 'Reservation',
        required: true
    },
    representativeId: {
        type: Schema.Types.ObjectId,
        ref: 'Representative',
        required: true
    },
    clubId: {
        type: Schema.Types.ObjectId,
        ref: 'Club',
        required: true
    },
    tableReqId: {
        type: Schema.Types.ObjectId,
        ref: 'TableRequest',
        required: true
    }
});


module.exports = mongoose.model('Transaction', transactionSchema); 