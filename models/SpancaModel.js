const mongoose = require("mongoose")

const Schema = mongoose.Schema

const spancaSchema = new Schema({
    
    judul: {
        type: String,
        required: true
    },
    jurusan: {
        type: String,
        required: true
    },
    kelas: {
        type: Number,
        required: true
    }

}, { timestamps: true})

module.exports = mongoose.model('Spanca', spancaSchema)

