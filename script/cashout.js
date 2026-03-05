document.getElementById("btn-withdraw").addEventListener("click",function(){
    // 1 - Get the agent number and validate
     const agentNumber = getValueFromInput('agent-number');
         if(agentNumber.length !=11){
        alert("Invalid Number")
        return;
    }

     // 2- Get the amount to withdraw
     const amount = getValueFromInput('withdraw-amount');

     // 3 - Get the current amount
     const currentBalance = getBalance();

     // 4 - Calculate the balance
     const newBalance = currentBalance - Number(amount);
       if(newBalance < 0){
        alert("Insufficient Balance");
        return;
    }

    // 5 - Verify the pin
    const pin = getValueFromInput('user-pin');
    if(pin === "1234"){
        alert("Withdraw Successfully")
        setBalance(newBalance);
    }
    else{
        alert("Invalid Pin");
        return;
    }
})