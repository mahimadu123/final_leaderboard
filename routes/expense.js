const express = require('express');
const expenseController = require('../controllers/expense');
const router = express.Router();

router.post('/addexpense', expenseController.addExpense);

module.exports = router;