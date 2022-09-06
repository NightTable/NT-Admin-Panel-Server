// NightTable, LLC has been granted a license by John Nydam 
// to use this document and the information contained in it 
// for business objectives pertinent to the company. 
// It must not be copied, duplicated, or used in any manner, 
// or transmitted to others without the written consent of John Nydam. 
// It must be returned to John Nydam when its authorized use is terminated.

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const menuItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    isSized: {
        type: Boolean,
        required: true
    },
    singlePrice: {
        type: Schema.Types.ObjectId,
        ref: 'MenuItem',
        required: true
    },
    menuCategoryId: {
        type: Schema.Types.ObjectId,
        ref: 'MenuCategory',
        required: true
    }
});


module.exports = mongoose.model('MenuItem', menuItemSchema); 