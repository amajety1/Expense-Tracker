const express = require('express');
const {addExpense, getExpenses ,deleteExpense, updateExpense, getExpenseById} = require('../controllers/expenseController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, addExpense);
router.get('/', authMiddleware, getExpenses);
router.get('/:id', authMiddleware, getExpenseById);
router.delete('/:id', authMiddleware, deleteExpense);
router.put('/:id', authMiddleware, updateExpense);

module.exports = router;