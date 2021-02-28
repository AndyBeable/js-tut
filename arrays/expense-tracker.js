const account = {
  name: 'Andrew Beable',
  expenses: [],
  income: [],
  addExpense: function (description, amount) {
    this.expenses.push({
      description: description,
      amount: amount,
    });
  },
  addIncome: function (description, amount) {
    this.income.push({
      description: description,
      amount: amount,
    });
  },
  getAccountSummary: function () {
    let totalExpenses = 0;
    let totalIncome = 0;
    let balance = 0;

    this.expenses.forEach(function (expense) {
      totalExpenses = totalExpenses + expense.amount;
    });

    this.income.forEach(function (income) {
      totalIncome = totalIncome + income.amount;
    });

    balance = totalIncome - totalExpenses;

    return `${this.name} has a balance of $${balance}. $${totalIncome} in income. $${totalExpenses} in expenses`;
  },
};

account.addExpense('Rent', 950);
account.addExpense('Clothes', 175);
account.addIncome('Side Hustle', 200);
account.addIncome('Salary', 2700);
console.log(account.getAccountSummary());

// Expense -> description, amount
// 2 func method on account obj. addExpense and get AccountSummary
// addExpense takes 2 args description, amount
// accountSummary total up all expenses and print 'Andrew Beable has $1400 in expenses.

// Add income array to account obj. start of as empty array
// Add an addIncome method -> will take in description, amount
// Tweak getAccountSummary to calculate account balance. Income - Expenses = total balance
// Print Andrew Beable has a balance of £balance. £100 in income. 90 in expenses.
