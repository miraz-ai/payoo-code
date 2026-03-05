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
   }
   else
   {
      alert('Invalid Pin')
      return;
   }
})