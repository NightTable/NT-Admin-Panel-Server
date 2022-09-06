// NightTable, LLC has been granted a license by John Nydam 
// to use this document and the information contained in it 
// for business objectives pertinent to the company. 
// It must not be copied, duplicated, or used in any manner, 
// or transmitted to others without the written consent of John Nydam. 
// It must be returned to John Nydam when its authorized use is terminated.

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const clubSchema = new Schema({
    name: {
        type: String,
        required: true
      },
      latitude: {
          type: Number,
          required: true
      },
      longitude: {
          type: Number,
          required: true
      },
      instaHandle: {
          type: String,
          required: true
      },
      phoneNumber: {
          type: Number,
          required: true
      },
      address: {
          type: String,
          required: true
      },
      website: {
          type: String,
          required: false
      },
      regionId: {
          type: Schema.Types.ObjectId,
          ref: 'Region',
          required: true
      },
      stripeAccountNum: {
          type: String,
          required: true
      },
      representativeId: {
          type: Schema.Types.ObjectId,
          ref: 'Representative',
          required: true
      }
});


module.exports = mongoose.model('Club', clubSchema); 