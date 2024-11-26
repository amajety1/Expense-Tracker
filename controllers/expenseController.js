const Expense = require('../models/Expense');

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