const Expense = require("../models/expense");

const getExpenses = async (req, res) => {
    try {
        let expenses = await Expense.find({});
        res.status(200).json(expenses);
    } catch (error) {
        console.log(error);
        res.status(400).json({ "error": "Couldn't Get The Data"});
    }
}

const getExpense = async (req, res) => {
    try {
        const { id } = req.params;
        const expense = await Expense.findById(id);
        res.status(200).json(expense);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const createExpense = async (req, res) => {
    try {
        const { productName, numberOfProducts, totalAmount, notes, typeOfExpense } = req.body;
        const expense = await Expense.create({ productName, numberOfProducts, totalAmount, notes, typeOfExpense });
        res.status(200).json({ id: expense._id });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: "Couldn't Create Expense in DB" });
    }
}

const updateExpense = async (req, res) => {
    try {
        const { id } = req.params;
        const { productName, numberOfProducts, totalAmount, notes, typeOfExpense } = req.body;
        const expense = await Expense.findByIdAndUpdate(id, {
            productName, numberOfProducts, totalAmount, notes, typeOfExpense, updatedAt: Date.now()
        });
        res.status(200).json({ id: expense._id });
    } catch (error) {
        console.log(error);
        res.status(400).json({"error": "Couldn't Update the document"});
    }
}

const deleteExpense = async (req, res) => {
    try {
        const { id } = req.body;
        const expense = await Expense.findByIdAndDelete(id);
        res.status(200).json({ status: 'success' });
    } catch (error) {
        console.log(error);
        res.status(400).json({ status: 'failure' });
    }
}

module.exports = { getExpenses, getExpense, createExpense, updateExpense, deleteExpense };
