const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
  item: String,
  numberOfItems: Number,
  totalPrice: Number,
  notes: String,
  typeOfExpense: {
    type: String,
    enum: ['default','future','recurring'],
    default: 'default'
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Expense = mongoose.model('Expense', ExpenseSchema);

module.exports = Expense;
