const express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/authenticate');

const { getExpenses, createExpense, getExpense, updateExpense, deleteExpense } = require('../controllers/expenseController');

router.get('/', getExpenses);

router.get('/:id', getExpense);

router.post('/', createExpense);

router.patch('/:id', updateExpense);

router.delete('/', deleteExpense);

module.exports = router; 