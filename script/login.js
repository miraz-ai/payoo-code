document.getElementById('btn-login').addEventListener('click',function(){
   const mobileNumberInput = document.getElementById('input-number')
    const contact = mobileNumberInput.value;
    console.log(contact);


    const pinInput = document.getElementById('input-pin');
    const pin = pinInput.value;
    console.log(pin);

    if(contact == "01783203317"  && pin == "1234"){
        alert("login Success");
        window.location.assign("../home.html")
    }
    else{
        alert("Login Failed");
        
    }
});