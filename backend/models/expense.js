const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
  item: String,
  numberOfItems: Number,
  totalPrice: Number,
  notes: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Expense = mongoose.model('Expense', ExpenseSchema);

module.exports = Expense;
