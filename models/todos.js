const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema ({
    objective: {type: String, required: true},
    completed: Boolean
})


const Item = mongoose.model('item', itemSchema)

module.exports = Item;