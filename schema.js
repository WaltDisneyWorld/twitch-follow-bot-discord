const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const user = new Schema({
    used: Number,
    rank: String
});