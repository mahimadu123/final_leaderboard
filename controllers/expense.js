const expenseService = require('../services/expenseService');

const addExpense = async (req, res) => {
    try {
        const expense = await expenseService.postExpenseService(req);
        res.status(201).json({ expense, success: true });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, error: err });
    }
};

module.exports = { addExpense };