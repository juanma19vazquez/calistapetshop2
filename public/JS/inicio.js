const boton = document.getElementById("botonmenu");
boton.addEventListener("click", function () {
    const menuhamburguesa = document.querySelector("#menu");
    if (menuhamburguesa.style.display === "grid") {
        menuhamburguesa.style.display = "none";
        
    } else {
        menuhamburguesa.style.display = "grid";
    }
});
// Acá abajo es el código para el slider
function crearSlider(listaDeImagenes,padre) {
  const contenedorSlider = document.createElement("div");
  contenedorSlider.classList.add("contenedor-slider");

  const slider = document.createElement("div");
  slider.classList.add("slider");
  slider.style.width = listaDeImagenes.imagenes.length * 100 + "%";

  const listaDeSections = listaDeImagenes.imagenes.map(function (imagen) {
    const unaSection = document.createElement("div");
    unaSection.classList.add("slider__section");
    unaSection.classList.add("secciones-lista" + listaDeImagenes.id);

    const sliderImg = document.createElement("img");
    sliderImg.classList.add("slider__img");
    sliderImg.src = imagen;

    unaSection.appendChild(sliderImg);
    slider.appendChild(unaSection);
    return unaSection;
  });

  contenedorSlider.appendChild(slider);

  const flechaIzq = document.createElement("div");
  flechaIzq.textContent = "<";
  flechaIzq.classList.add("slider__btn");
  flechaIzq.classList.add("slider__btn--left");

  const flechaDer = document.createElement("div");
  flechaDer.textContent = ">";
  flechaDer.classList.add("slider__btn");
  flechaDer.classList.add("slider__btn--right");

  contenedorSlider.appendChild(flechaDer);
  contenedorSlider.appendChild(flechaIzq);
  
  const div5 = document.querySelector(".div5");
  div5.after(contenedorSlider);


  const ultimaSliderSection = listaDeSections[listaDeSections.length - 1];
  slider.insertAdjacentElement("afterbegin", ultimaSliderSection);

  function Next() {
    let sliderSectionFirst = document.querySelectorAll(
      ".secciones-lista" + listaDeImagenes.id
    )[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function () {
      slider.style.transition = "none";
      slider.insertAdjacentElement("beforeend", sliderSectionFirst);
      slider.style.marginLeft = "-100%";
    }, 500);
  }

  function Prev() {
    let sliderSection = document.querySelectorAll(
      ".secciones-lista" + listaDeImagenes.id
    );
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function () {
      slider.style.transition = "none";
      slider.insertAdjacentElement("afterbegin", sliderSectionLast);
      slider.style.marginLeft = "-100%";
    }, 500);
  }

  flechaIzq.addEventListener("click", function () {
    Prev();
  });

  flechaDer.addEventListener("click", function () {
    Next();
  });

setInterval(function () {
Next();
 }, 2000); 
}

const listaDeFotos = {
  id: 1,
  imagenes: [
    "./FOTOS/Productos/Chaleco 3.png",
    "./FOTOS/Productos/buzo berlin.png",
    "./FOTOS/Productos/Adidog.png",
  ],
};


crearSlider(listaDeFotos)

const listaDeFotos2 = {
  id: 2,
  imagenes: [
    "./FOTOS/Productos/Chaleco 3.png",
    "./FOTOS/Productos/buzo berlin.png",
    "./FOTOS/Productos/Adidog.png",
  ],
};
  

