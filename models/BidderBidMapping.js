// NightTable, LLC has been granted a license by John Nydam 
// to use this document and the information contained in it 
// for business objectives pertinent to the company. 
// It must not be copied, duplicated, or used in any manner, 
// or transmitted to others without the written consent of John Nydam. 
// It must be returned to John Nydam when its authorized use is terminated.

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bidderBidMappingSchema = new Schema({
    biddingId: {
        type: Schema.Types.ObjectId,
        ref: 'Bidding',
        required: true
    },
    bidderName: {
        type: String,
        required: true
    },
    bidAmount: {
        type: Number,
        required: true
    },
    bidUpdatedDate: {
        type: Date,
        required: true
    }
});


module.exports = mongoose.model('BidderBidMapping', bidderBidMappingSchema); 