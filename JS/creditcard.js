function validateBill(){
    var ccnum = document.getElementById("name").value;
    var rccnum = document.getElementById("reenter").value;
    var mail = document.getElementById("email").value;
    const mobnum = document.getElementById("phone").value;
    var mnum = mobnum.toString();
    var amt = document.getElementById("amount").value;
    var dcnum = document.getElementById("card-number").value;
    var exp = document.getElementById("expiry-date").value;
    const dcvv = document.getElementById("cvv").value;
    var cvv = dcvv.toString();

    if (ccnum === '' || rccnum === '' || mail === '' || mnum === '' || amt === '' || dcnum === '' || exp === '' || cvv === ''){
        alert("Please fill all the fields");
        return false;
    }
    else if (ccnum !== rccnum){
        alert("Please Re-enter correct credit card number")
        return false;
    }
    else if (mnum.length > 10){
        alert("Enter 10 digit mobile number");
        return false;
    }
    else if (parseFloat(amt) <= 0) {
        alert('Amount must be greater than zero.');
        return false;
    }
    else if(cvv.length < 3 || cvv.length > 3){
        alert("Please look into your debit card and enter valid cvv number");
        return false;
    }
    else{
        
        window.location.assign("creditcard.html");
        alert('Payment successfull');
    }
}