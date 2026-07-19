document.getElementById("cashout-btn").addEventListener("click", function () {
  // 1- get the agent number & validate
  const cashoutNumber = getValueFromInput("cashout-number");
  if(cashoutNumber.length !=11) {
    alert("invald number");
    return;
  }
  // console.log(cashoutNumber);
  // 2- get the amount
  const cashoutAmount = getValueFromInput("cashout-amount");
  // 3- get the Current Balance , validate , convert to number
  const balanceElement = document.getElementById("balance");
  const balance = balanceElement.innerText;
  console.log(balance);
  // 4- Calculate balance
  const newBalance = Number(balance) - Number(cashoutAmount);
  console.log(newBalance);
  if (newBalance < 0) {
    alert("invald amount");
    return;
  }
  const pin = getValueFromInput("cashout-pin");
  if (pin === "1234") {
    alert("Cashout Succesful");
    balanceElement.innerText = newBalance;
  } else {
    alert("invald pin");
    return;
  }
})


// document.getElementById("cashout-btn").addEventListener("click", function () {
//     // 1- get the agent number & validate
//     const cashoutNumberInput = document.getElementById("cashout-number");
//     const cashoutNumber = cashoutNumberInput.value;
//     console.log(cashoutNumber);

//     // 2- get the amount , validate , convert to number
//     const cashoutAmountInput = document.getElementById("cashout-amount");
//     const cashoutAmount = cashoutAmountInput.value;
//     console.log(cashoutAmount);
//     if(cashoutNumber.length !=11){
//         alert("Invalid Agent Number");
//         return;
//     }

//     // 3- get the Current Balance , validate , convert to number
//     const balanceElement = document.getElementById("balance");
//     const balance = balanceElement.innerText;
//     console.log(balance);

//     // 4- Calculate new balance
//     const newBalance = Number(balance) - Number(cashoutAmount);

//     if (newBalance < 0) {
//         alert("Invalid Amount");
//         return;
//     }
//     console.log("new balance", newBalance);
//     // 5- Get the pin and verify
//     const cashoutPinInput = document.getElementById("cashout-pin");
//     const pin = cashoutPinInput.value;
//     if (pin === "1234") {
//         // 5-1 true:: show an alert > set balance
//         alert("cashout successfull");
//         console.log("new balance", newBalance);
//         balanceElement.innerText = newBalance;
//     } else {
//         // 5-2 false:: show an error alert > return
//         alert("invalid pin");
//         return;
//     }
// })