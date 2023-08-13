function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var add = document.getElementById("address").value;
    var loanAmount = document.getElementById("loan-amount").value;
    var loanType = document.getElementById("loan-type").value;
    var emps = document.getElementById("employment-status").value;
  
    if (name == "" || email == "" || phone == "" || add == " " || loanAmount == "" || loanType == "" || emps == " ") {
      alert("Please fill out all required fields.");
      return false;
    }
    else{
        alert("Loan application form submitted successfully");
    }
  }
  