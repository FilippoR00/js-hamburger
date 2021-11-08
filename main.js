// soluzione con gli id
// const menuOpen = document.getElementById('openMenu');

// menuOpen.addEventListener("click", function() {
//     document.getElementById("menu").style.display = "block";
// });

// const menuClose = document.getElementById('closeMenu');

// menuClose.addEventListener("click", function () {
//     document.getElementById("menu").style.display = "none";
// });




// soluzione usando le classi
const openMenu = document.querySelector(".fa-bars");
openMenu.addEventListener("click", function () {
    document.querySelector(".hamburger-menu").classList.add("active")
});

const closeMenu = document.querySelector(".fa-times");
closeMenu.addEventListener("click", function () {
    document.querySelector(".hamburger-menu").classList.remove("active")
});