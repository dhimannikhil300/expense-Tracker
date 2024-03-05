const mongoose = require('mongoose')

const IncomeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxLenght: 50
    },
    amount: {
        type: Number,
        require: true,
        maxLenght: 20,
        trim: true,
    },
    type: {
        type: String,
        default: 'income'
    },
    date: {
        type: Date,
        require: true,
        tirm: true
    },
    category: {
        type: String,
        require: true,
        tirm: true
    },
    description: {
        type: String,
        require: true,
        maxLenght: 20,
        tirm: true
    }
}, {timestamps: true})

module.exports = mongoose.model("Income", IncomeSchema)