const mongoose = require("mongoose");

const pochvaSchema = new mongoose.Schema({
    ime: {
        type: String
    },
    tip: {
        type: String
    },
    ph: {
        type: Number,
        min: 0,
        max: 14
    },
    humus: {
        type: Number
    },
    tekstura: {
        type: String
    },
    boja: {
        type: String
    },
    lokacija: {
        type: String
    },
    nadmorskaVisina: {
        type: Number
    },
    karakteristiki: {
        type: String
    },
    kultura: [{
        type: String
    }],
    datumDodavanje: {
        type: Date,
        default: Date.now
    }
});

const Pochva = mongoose.model("Pochva", pochvaSchema);

module.exports = Pochva;