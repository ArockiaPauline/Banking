function validateForm() {
    // Get form input values
    var cardnum = document.getElementById('cnum').value;
    var rcardnum = document.getElementById('rcnum').value;
    var amount = document.getElementById('amt').value;
  
    // Check if biller name is empty
    if (cardnum === '') {
      alert('Please enter a valid card number');
      return false;
    }
  
    // Check if account number is empty or not a number
    else if (rcardnum !== cardnum) {
      alert('Please enter correct card number');
      return false;
    }
  
    // Check if amount is empty or not a number
    else if (amount === ' ') {
      alert('Please enter a valid amount');
      return false;
    }
  
    // Check if amount is greater than zero
    else if (parseFloat(amount) <= 0) {
      alert('Amount must be greater than zero.');
      return false;
    }
  
    else{
        
        window.location.assign("creditcard.html");
        alert('Payment successfull');
    }
  }
  