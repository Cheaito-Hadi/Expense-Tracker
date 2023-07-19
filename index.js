const expenseInput = $("#expense-text");
const amountInput = $("#expense-amount");
const expenseList = $("#expense-list");
const total = $("#total-expense");
var expenseTotal = 0;

function createExpense(text, amount) {
  return `<li>
      <span class="text">${text}</span>
      <span class="text">$${amount}</span>
      <button class="remove">Delete</button>
      <input type="text" style="display: none;"/>
    </li>
    `
}

function addExpense() {
  if (expenseInput.val().trim() === "") return;
  if (amountInput.val().trim() === "") return;

  const expense = $(createExpense(expenseInput.val(), amountInput.val()));
  const expenseAmount = parseFloat(amountInput.val());

  expenseTotal += expenseAmount;
  expenseList.append(expense);
  amountInput.val("");
  expenseInput.val("");
  total.text(`Total $${expenseTotal}`);

  expense.find(".remove").click(function () {
    expenseTotal -= expenseAmount;
    expense.remove();
    total.text(`Total $${expenseTotal}`);
  });
}


$(document).ready(function () {
  const expenseButton = $("#btn");
  expenseButton.click(addExpense);

  $("#expense-text").keyup(function (event) {
    if (event.keyCode === 13) {
      addExpense()
    }
  }
  )
  $("#expense-amount").keyup(function (event) {
    if (event.keyCode === 13) {
      addExpense()
    }
  }
  )

})