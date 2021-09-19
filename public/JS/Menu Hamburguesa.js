const boton = document.getElementById("botonmenu");
boton.addEventListener("click", function () {
    const menuhamburguesa = document.querySelector("#menu");
    if (menuhamburguesa.style.display === "grid") {
        menuhamburguesa.style.display = "none";
        
    } else {
        menuhamburguesa.style.display = "grid";
    }
});