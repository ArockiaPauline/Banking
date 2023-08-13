const scrollTopBtn = document.getElementById("scroll-top-btn");

window.addEventListener("scroll", () => {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.display = "block";
} else {
    scrollTopBtn.style.display = "none";
}
});

scrollTopBtn.addEventListener("click", () => {
window.scrollTo({ top: 0, behavior: "smooth" });
});

//TIME SHOWER:

function digi(){

  var date=new Date();
  var hrs=date.getHours();
  var min=date.getMinutes();
  var sec=date.getSeconds();

  if (hrs < 10){
    hrs = "0" + hrs;
  }
  if (min < 10){
    min = "0" + min;
  }
  if(sec < 10){
    sec = "0" + sec;
  }
  
  document.getElementById("hours").innerHTML=hrs;
  document.getElementById("minutes").innerHTML=min;
  document.getElementById("seconds").innerHTML=sec;

}
setInterval(digi)
