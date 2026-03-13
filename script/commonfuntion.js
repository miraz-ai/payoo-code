// Get ID
function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    return value;
}
// Get Balance
function getBalance(){
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    return Number(balance);
}

//Set the balance
function setBalance(value){
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = value;
}

// Show only clicked button functionality
function showOnly(id){
    const addMoney = document.getElementById('add-money');
    const cashOut = document.getElementById('cash-out');
    const transactionHistory = document.getElementById('transaction-history');
    
    // First hide all the button functionality
    addMoney.classList.add("hidden");
    cashOut.classList.add("hidden");
    transactionHistory.classList.add("hidden")

    // Then button will be functionality by clicking the select button
    const selectedButton = document.getElementById(id);
    selectedButton.classList.remove("hidden");
}

