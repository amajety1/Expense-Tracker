const Expense = require('../models/Expense');
const mongoose = require('mongoose');
exports.addExpense = async (req, res) => {
    try{
        const { user, category, amount, date, description } = req.body;
        const expense = new Expense({ user, category, amount, date, description });
        await expense.save();
        res.status(201).json({ message: 'Expense added successfully' });
    }
    catch (error) {
        res.status(500).json({ error:error.message });
    }
}

exports.getExpenses = async (req, res) => {
    try{
        const {start, end} = req.query;
        const filter = {user: req.user.id};
        if (start && end) {
            filter.date = {$gte: start, $lte: end};
            
        }
        const expenses = await Expense.find(filter);
        res.status(200).json(expenses);
    }
    catch (error) {
        res.status(500).json({ error:error.message });
    }
}

exports.deleteExpense = async (req, res) => {
    try{
        const {id} = req.params;
        const expenseId = new mongoose.Types.ObjectId(id);
        await Expense.findByIdAndDelete(expenseId);
        res.status(200).json({ message: 'Expense deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ error:error.message });
    }
}

exports.updateExpense = async (req, res) => {
    try{
        const {id} = req.params;
        const expenseId = new mongoose.Types.ObjectId(id);
        const updatedExpense = await Expense.findByIdAndUpdate(expenseId, req.body, {new: true});
        res.status(200).json(updatedExpense);
    }
    catch (error) {
        res.status(500).json({ error:error.message });
    }
}

exports.getExpenseById = async (req, res) => {
    try{
        const {id} = req.params;
        const expenseId = new mongoose.Types.ObjectId(id.toString());        
        const expense = await Expense.findById(expenseId);
        res.status(200).json(expense);
    }
    catch (error) {
        res.status(500).json({ error:error.message });
    }
}