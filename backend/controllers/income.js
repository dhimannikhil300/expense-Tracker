const IncomeSchema = require('../models/incomeModel')

exports.addIncome = async (req, res) => {
    const {title, amount, category, description, date} = req.body;
    
    const income = IncomeSchema({
        title, amount, category, description, date
    })

    try{
        if(!title || !category || !description || !date || !amount){
            return res.status(400).json({
                success:false,
                message: "All Fields are required"
            })
        }
        if(amount <= 0 || isNaN(amount)){
            return res.status(400).json({
                success:false,
                message: "Amount must be a positive number"
            })
        }
        console.log('income is : ', income);
        const result = await income.save()

        return res.status(200).json({
            success:true,
            message: "Income Added",
            data: result
        })

    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Error in income add",
            error: err
        })
    }
}

exports.getIncome = async (req, res) => {
    try{
        const incomes = await IncomeSchema.find().sort({createdAt: -1})
        return res.status(200).json({
            success: true,
            data: incomes
        })
    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Server Error in get income"
        })
    }
}

exports.deleteIncome = async (req, res) => {
    const {id} = req.params
    try{
        const incomes = await IncomeSchema.findByIdAndDelete(id)
        return res.status(200).json({
            success: true,
            message: "income Deleted",
            data: incomes
        })
    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Server Error in delete income"
        })
    }
}