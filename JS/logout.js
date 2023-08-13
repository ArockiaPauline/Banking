const logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click",() => {
    //window.location.href="index.html";
    const confirmlog = confirm("Are you sure you want to log out?")
    if (confirmlog){
        alert("You have been successfully logged out");
        window.close("#");
        window.open("index.html");
    }
}
);