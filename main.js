let openBtn = document.querySelector(".open");
let closeBtn = document.querySelector(".close");
let burgerMenu = document.querySelector(".block3-2");

function findOdd() {    
    openBtn.style.display = "none";
    burgerMenu.style.display = "block";
    closeBtn.style.display = "block"; 
}

function closeOdd() {
    burgerMenu.style.display = "none";
    closeBtn.style.display = "none";
    openBtn.style.display = "block"
}




// openBtn.addEventListener("click", () => {
//   burgerMenu.style.display = "block";
// });
// closeBtn.addEventListener("click", () => {
//   burgerMenu.style.display = "none";
// });


