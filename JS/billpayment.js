function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }



  const textBoxes = document.querySelectorAll('.text-box');

textBoxes.forEach(textBox => {
  const header = textBox.querySelector('.header');
  const arrow = textBox.querySelector('.arrow');
  const content = textBox.querySelector('.content');
  
  header.addEventListener('click', () => {
    textBox.classList.toggle('active');
    arrow.classList.toggle('down');
    
    if (textBox.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = null;
    }
  });
});



