const express = require('express');
const cors = require('cors');
const path = require('path');

const sequelize = require('./util/database');
const User = require('./models/users');
const Expense = require('./models/expenses');

const expenseRoutes = require('./routes/expense');
const premiumFeatureRoutes = require('./routes/premiumFeature');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

User.hasMany(Expense);
Expense.belongsTo(User);

app.use('/expense', expenseRoutes);
app.use('/premium', premiumFeatureRoutes);

sequelize.sync()
  .then(() => {
    app.listen(3000, () => {
      console.log('Server is running on port 3000 with Clean Service Architecture');
    });
  })
  .catch(err => {
    console.log(err);
  });