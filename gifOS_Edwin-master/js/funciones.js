// Desplegable para cambiar de Tema
function funcionDesplegable() {
    const tema = document.getElementById("desplegableTema");
    
      if (tema.style.display === "none") {
          tema.style.display = "flex";
        } else {
          tema.style.display = "none";
        }
  }


// Función para generar las imagenes de los grid.

function gifImagen (){
    const nuevaCaja = document.createElement('div')
    nuevaCaja.classList.add('gridCont');
    gifdiv.appendChild(nuevaCaja);

    const nuevoGif = document.createElement('img')
    nuevoGif.id = "nGif"+nGif++;
    nuevoGif.src = gifurl;
    nuevaCaja.appendChild(nuevoGif);

    const divtitle = document.createElement('div')
    divtitle.classList.add('footer');
    nuevaCaja.appendChild(divtitle);

    const gtitle = document.createElement('p')
    divtitle.appendChild(gtitle);
    gtitle.id = "nGif"+nGif++;
    gtitle.innerHTML = titulo;
}