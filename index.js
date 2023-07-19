const expenseInput = $("#expense-text");
const amountInput = $("#expense-amount");
const expenseList = $("#expense-list");

function createExpense(text, amount) {
    return `<li>
      <span class="remove">&#128465</span>
      <span class="text">${text}</span>
      <span class="text">${amount}</span>
      <input type="text" style="display: none;"/>
    </li>
    `
  }

  function addExpense() {

    if (expenseInput.val().trim()  === "") return;
    if (amountInput.val().trim()  === "") return;
    
  
    const expense = $(createExpense(expenseInput.val(),amountInput.val()))

    expenseList.append(expense)
    expenseInput.val("")
    amountInput.val("")
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