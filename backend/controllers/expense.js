const ExpenseSchema = require('../models/expenseModel')

exports.addExpense = async (req, res) => {
    const {title, amount, category, description, date} = req.body;
    
    const expense = ExpenseSchema({
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
        const result = await expense.save()

        return res.status(200).json({
            success:true,
            message: "expense Added",
            data: result
        })

    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Error in expense add",
            error: err
        })
    }
}

exports.getExpense = async (req, res) => {
    try{
        const expense = await ExpenseSchema.find().sort({createdAt: -1})
        return res.status(200).json({
            success: true,
            data: expense
        })
    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Server Error in get expense"
        })
    }
}

exports.deleteExpense = async (req, res) => {
    const {id} = req.params
    try{
        const expenses = await ExpenseSchema.findByIdAndDelete(id)
        return res.status(200).json({
            success: true,
            message: "expense Deleted",
            data: expenses
        })
    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Server Error in delete expense"
        })
    }
}