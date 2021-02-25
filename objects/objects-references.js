let myAccount = {
  name: 'Andy Beable',
  expenses: 0,
  income: 0,
};

//ADD EXPENSE
let addExpense = function (account, amount) {
  account.expenses = account.expenses + amount;
};

//ADD INCOME
let addIncome = function (account, income) {
  account.income = account.income + income;
};

//RESET
let resetAccount = function (account) {
  account.expenses = 0;
  account.income = 0;
};

// GET SUMMARY
let accountSummary = function (account) {
  let balance = account.income - account.expenses;

  return `Account for ${account.name} has $${balance}. $${account.income} in come. $${account.expenses} in expenses.`;
};

addIncome(myAccount, 3000);
addExpense(myAccount, 500);
addExpense(myAccount, 100);
console.log(accountSummary(myAccount));
resetAccount(myAccount);
console.log(accountSummary(myAccount));
