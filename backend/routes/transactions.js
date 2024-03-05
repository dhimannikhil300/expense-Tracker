const router = require('express').Router()
const { addExpense, getExpense, deleteExpense } = require('../controllers/expense')
const {addIncome, getIncome, deleteIncome} = require('../controllers/income')

router.post('/add-income', addIncome)
router.get('/get-incomes', getIncome)
router.delete('/delete-income/:id', deleteIncome)
router.post('/add-expense', addExpense)
router.get('/get-expenses', getExpense)
router.delete('/delete-expense/:id', deleteExpense)

module.exports = router