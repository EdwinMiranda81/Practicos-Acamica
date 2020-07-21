
//Desplegable de sugeridos en la barra de busqueda

// search.addEventListener('input', () => searchStates(search.value));

const searchStates = async searchText => {
  if (search.value == null || search.value.length == 0 || /^\s+$/.test(search.value)) {
    document.querySelector('.opcionalesBusqueda').style.display = "none";

  }
  else {
    document.querySelector('.opcionalesBusqueda').style.display = "flex";
  }
  const res = await fetch("https://api.giphy.com/v1/gifs/search?q=" + search.value + "&api_key=" + apiKey);
  const data = await res.json();

  for (var i = 1; i < 7; i++) {
  
    let title_input = document.getElementById("btn" + i);
    let hashtag = data.data[i].title;
    title_input.innerHTML = `# ${hashtag}`;
    title_input.setAttribute("value", hashtag);
  }
  
};


  

document.getElementById("btn1").addEventListener("click", () => {
  search.value = document.getElementById("btn1").value;
  document.querySelector(".opcionalesBusqueda").style.display = "none";
  searchFromInput()
});

document.getElementById("btn2").addEventListener("click", () => {
  search.value = document.getElementById("btn2").value;
  document.querySelector(".opcionalesBusqueda").style.display = "none";
  searchFromInput()
});

document.getElementById("btn3").addEventListener("click", () => {
  search.value = document.getElementById("btn3").value;
  document.querySelector(".opcionalesBusqueda").style.display = "none";
  searchFromInput()
});

document.getElementById("btnBuscar").addEventListener("click", even => {
  document.querySelector(".opcionalesBusqueda").style.display = "none";
  even.preventDefault();
  searchFromInput()
});

document.getElementById("btn4").addEventListener("click", () => {
  search.value = document.getElementById("btn4").value;
  searchFromInput()
}); 
document.getElementById("btn5").addEventListener("click", () => {
  search.value = document.getElementById("btn5").value;
  searchFromInput()

}); 
document.getElementById("btn6").addEventListener("click", () => {
  search.value = document.getElementById("btn6").value;
  searchFromInput()
});
  

// Busqueda del valor ingresado en la barra
//document.querySelector(".busqueda").style.display = "none";

function searchFromInput() {

  const input = document.getElementById('inputBuscar').value;        
  console.log(input);
    document.querySelector(".busqueda").style.display = "block";
    document.querySelector(".tendencia").style.display = "none";
    document.querySelector(".sugerido").style.display = "none";
    document.querySelector(".verMasSugerido").style.display = "none";
    document.getElementById('gridBusqueda').innerHTML = '';
    document.getElementById("busquedaTitle").innerHTML = `${search.value} [resultado]`
    
    let searchitemsurl = `${apiSearch}api_key=${apiKey}&q=${input}&limit=24&offset=0&rating=G&lang=en`;

      fetch(searchitemsurl)
          .then(response => {
            
              return response.json();
            
          })
          .then(json => {
              json.data.forEach (item => {
                gifdiv = document.getElementById('gridBusqueda');
                gifurl = item.images.original.url;
                titulo = item.title;
                
                gifImagen(gifurl,titulo);
                
                document.querySelector(".sugerenciaBusqueda" ).style.display = "flex";
                return json;
              })
            })
      
      document.getElementById('inputBuscar').value = null;
}
  