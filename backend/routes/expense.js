const express = require('express');
const router = express.Router();
const Expense = require('../models/expense');

router.get('/', async (req, res) => {
    try {
        const expenses = await Expense.find({});
        res.status(200).json(expenses);
    } catch (error) {
        console.log(error);
        res.status(400).json({ "error": "Couldn't Get The Data"});
    }
});

router.post('/', async (req, res) => {
    try {
        const { productName, numberOfProducts, totalAmount, notes, typeOfExpense } = req.body;
        const expense = await Expense.create({ productName, numberOfProducts, totalAmount, notes, typeOfExpense });
        console.log(expense);
        res.status(200).json(expense);
    } catch (error) {
        console.log(error);
        res.status(400).json({"error": "Couldn't Create Expense in DB"});
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { productName, numberOfProducts, totalAmount, notes } = req.body;
        const expense = await Expense.findByIdAndUpdate(id, {
            productName, numberOfProducts, totalAmount, notes, typeOfExpense, updatedAt: Date.now()
        });
        console.log(expense);
        res.status(200).json(expense);
    } catch (error) {
        console.log(error);
        res.status(400).json({"error": "Couldn't Update the document"});
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const expense = await Expense.findByIdAndDelete(id);
        res.status(200).json(expense);
    } catch (error) {
        console.log(error);
        res.status(400).json({"error": "Couldn't Delete the document"});
    }
});

module.exports = router; 