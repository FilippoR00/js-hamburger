const menuOpen = document.getElementById('openMenu');

menuOpen.addEventListener("click", function() {
    document.getElementById("menu").style.display = "block";
});

const menuClose = document.getElementById('closeMenu');

menuClose.addEventListener("click", function () {
    document.getElementById("menu").style.display = "none";
});