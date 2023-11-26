const express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/authenticate');

const { getExpenses, createExpense, getExpense, updateExpense, deleteExpense } = require('../controllers/expenseController');

router.get('/', authenticate, getExpenses);

router.get('/:id', authenticate, getExpense);

router.post('/', authenticate, createExpense);

router.patch('/:id', authenticate, updateExpense);

router.delete('/', authenticate, deleteExpense);

module.exports = router; 