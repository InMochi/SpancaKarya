const mongoose = require("mongoose")

const Schema = mongoose.Schema

const spancaSchema = new Schema({

    title: {
        type: String,
        required: true
    },
    major: {
        type: String,
        required: true
    },
    class: {
        type: Number,
        required: true
    }

}, { timestamps: true})