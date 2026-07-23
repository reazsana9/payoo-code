document.getElementById("pay-bill-btn").addEventListener("click", function () {
    // 1 - bank account get
    const bankAccount = getValueFromInput("pay-bill-for");
    if (bankAccount == "Select a Bank") {
        alert("please select a Bank");
        return;
    }
    // 2 - get bank account number
    const billAccno = getValueFromInput("bill-account-number");
    if (billAccno.length != 11) {
        alert("invalid acc no");
        return;
    }
    // 3 - get amount
    const amount = getValueFromInput("pay-bill-amount");
    const currentBalance = getBalance();
    const newBalance = currentBalance - Number(amount);
    if (newBalance < 0) {
        alert("invalid amount");
        return;
    }
    const pin = getValueFromInput("pay-bill-pin");
    if (pin == "1234") {
        alert(`Pay Bill Success for
             ${bankAccount} 
             at ${new Date()}`);
        setBalance(newBalance);

        // 1- history-container ke dhore niya ashbo

        const history = document.getElementById("history-container");
        // 2- new div create korbo
        const newHistory = document.createElement("div")
        // 3- new div innerHTML add korbo
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
            Pay Bill ${amount} TAKA Success for ${bankAccount} , acc-no ${billAccno} at ${new Date()}
        </div>
        `
        // 4- history container a newDiv append korbo
        history.append(newHistory);
    } else {
        alert("Invalid Pin");
        return;
    }

})