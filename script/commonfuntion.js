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