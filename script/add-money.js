document.getElementById('btn-add-money').addEventListener('click',function(){
   //1 - Get the Bank Selected Bank Name
   const bankName = getValueFromInput('add-money-bank-name');
   if(bankName == "Select a bank"){
      alert("Please Select Your Bank")
      return;
   }
   //2 - Get the Bank Account Number 
   const bankAccount = getValueFromInput("add-money-bank-number");
   if(bankAccount.length !=11){
      alert("Invalid Account Number");
   }

   //3 - Get the amount to be added
   const amount = getValueFromInput('add-money-amount');
   const newBalance = getBalance() + Number(amount);

   const pin = getValueFromInput('user-pin')
   if(pin === '1234'){
      alert(`Money Added Successfully from ${bankName} at ${new Date()}`)
      setBalance(newBalance);
      // history.
       const history = document.getElementById('history-container');
       const newHistory = document.createElement("div")
       newHistory.innerHTML = `
         <div class="transaction-card card bg-base-100 w-full shadow rounded-2xl">
               ${'$'+amount} Money Added Successfully from ${bankName} at ${new Date()}
         </div>
       `;
       history.append(newHistory);
   }
   else
   {
      alert('Invalid Pin')
      return;
   }
})