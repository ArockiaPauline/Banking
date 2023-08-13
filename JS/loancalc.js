let MonthlySalary =document.querySelector(".monthly-salary");
let LoanAmount =document.querySelector(".loan-amount");
let FixedInterestAnnually =document.querySelector(".fixed-interest");
let LoanRepaymentPeriod =document.querySelector(".loan-repayment");
let DeductionPercentage =document.querySelector(".deduction-percentage .value");
let TotalInterest =document.querySelector(".total-interest .value");
let TotalPaid =document.querySelector(".total-paid .value");
let MonthlyInstallment =document.querySelector(".monthly-installment .value");
let CalculateButton=document.querySelector(".calculate-button");
let ClearButton=document.querySelector(".clear-button");

if(window.localStorage.getItem("info")){
 
  showoutputtobrowser(window.localStorage.getItem("info"));

}

else{

}

function addchart(LoanAmount,TotalInterest){
 let xValues = ["Loan Amount", "Total Interest"];
 let yValues = [LoanAmount,TotalInterest];
 let barColors = [
    "#FADA9D",
    "#FBF1D3"
  ];
  
  new Chart("myChart", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      title: {
        display: true,
        text: "World Wide Chart for Loan Amount and Total Interest"
      }
    }
  });

}


function showoutputtobrowser(localstoragevalue){
  if(localstoragevalue){
     
    let dataneeded=window.localStorage.getItem("info");
    let dataused=JSON.parse(dataneeded);

    MonthlySalary.value=dataused.salary;
    LoanAmount.value=dataused.loanvalue;
    FixedInterestAnnually.value=dataused.Interest;
    LoanRepaymentPeriod.value=dataused.period;

    TotalPaid.innerHTML =dataused.totalloan;
    MonthlyInstallment.innerHTML=dataused.installmonth;
    TotalInterest.innerHTML=dataused. totalinstall;
    DeductionPercentage.innerHTML=dataused.deductpersentage;

  }
  else{
    TotalPaid.innerHTML ="";
    MonthlyInstallment.innerHTML="";
    TotalInterest.innerHTML="";
    DeductionPercentage.innerHTML=""

  }
  if(DeductionPercentage.innerHTML<=50) {
    addchart(LoanAmount.value,TotalInterest.innerHTML);   
   }
   else{
window.alert("Please enter a suitable loan amount for the monthly salary");
LoanAmount.value="";
   }
 
}



function addobjecttolocalstorage(info){
  let data=window.localStorage.setItem("info",JSON.stringify(info));
  showoutputtobrowser(window.localStorage.getItem("info"));
}


function addloancalculationvaluestoobject( monthsalary,loanamountvalue,InterestAnnually,loanperiod,totalpaidvalue,MonthlyInstallmentvalue,TotalInterestvalue,DeductionPercentagevalue){
  let info={
   
    salary:monthsalary,
  loanvalue:loanamountvalue,
  Interest:InterestAnnually,
  period:loanperiod,
  totalloan:totalpaidvalue,
  installmonth:MonthlyInstallmentvalue,
  totalinstall:TotalInterestvalue,
  deductpersentage:DeductionPercentagevalue

  };

console.log(info);
addobjecttolocalstorage(info);



}

function loancalculator(MonthlySalary,LoanAmount,FixedInterestAnnually,LoanRepaymentPeriod){

    let monthsalary=parseFloat(MonthlySalary.value);
    let loanamountvalue=parseFloat(LoanAmount.value);
    let InterestAnnually=parseFloat(FixedInterestAnnually.value);
    let loanperiod=parseFloat(LoanRepaymentPeriod.value);
    
   let totalpaidvalue=((1+((InterestAnnually*loanperiod)/100))*loanamountvalue).toFixed(2);
   let MonthlyInstallmentvalue=(totalpaidvalue/((loanperiod)*12)).toFixed(2);
   let TotalInterestvalue=(totalpaidvalue-loanamountvalue).toFixed(2);
   let DeductionPercentagevalue=(( MonthlyInstallmentvalue/monthsalary)*100).toFixed(2);
  console.log(monthsalary,loanamountvalue,InterestAnnually,loanperiod,totalpaidvalue,MonthlyInstallmentvalue,TotalInterestvalue,DeductionPercentagevalue);
   addloancalculationvaluestoobject(monthsalary,loanamountvalue,InterestAnnually,loanperiod,totalpaidvalue,MonthlyInstallmentvalue,TotalInterestvalue,DeductionPercentagevalue);




}




function calculateloan(event){

  if((MonthlySalary.value.match(/^[-+]?[0-9]+$/))&&(LoanAmount.value.match(/^[-+]?[0-9]+$/))&&(FixedInterestAnnually.value.match(/^[-+]?[0-9]+$|^[-+]?[0-9]+\.[0-9]+$/))&&(LoanRepaymentPeriod.value.match(/^[-+]?[0-9]+$/))){
    loancalculator(MonthlySalary,LoanAmount,FixedInterestAnnually,LoanRepaymentPeriod);

}
else{
    window.alert("please insert all required inputs in numbered formate without any character");
    MonthlySalary.value="";
    LoanAmount.value="";
    FixedInterestAnnually.value="";
    LoanRepaymentPeriod.value="";

}

location.reload();
}


function addblackbordertocalculatebutton(event){


  if(event.target.classList.contains("calculatebutton-blackborder")){
      event.target.classList.remove("calculatebutton-blackborder");
      event.target.classList.add("calculate-button");
  }
  
  }
  
  function removeblackbordertocalculatebutton(event){
  
      event.target.classList.add("calculatebutton-blackborder");
      event.target.classList.remove("calculate-button");
  }
  
  
  function addblackbordertoclearbutton(event){
  
  
    if(event.target.classList.contains("clearbutton-blackborder")){
        event.target.classList.remove("clearbutton-blackborder");
        event.target.classList.add("clear-button");
    }
    
    }
    
    function removeblackbordertoclearbutton(event){
    
        event.target.classList.add("clearbutton-blackborder");
        event.target.classList.remove("clear-button");
    }

    function removelocalstorage(event){
      MonthlySalary.value="";
      LoanAmount.value="";
      FixedInterestAnnually.value="";
      LoanRepaymentPeriod.value="";
      window.localStorage.clear();
      showoutputtobrowser(window.localStorage.getItem("info"));
      location.reload();


    }

CalculateButton.addEventListener("click",calculateloan);

CalculateButton.addEventListener("mouseup",addblackbordertocalculatebutton);

CalculateButton.addEventListener("mousedown",removeblackbordertocalculatebutton);

ClearButton.addEventListener("mouseup",addblackbordertoclearbutton);

ClearButton.addEventListener("mousedown",removeblackbordertoclearbutton);

ClearButton.addEventListener("click",removelocalstorage)