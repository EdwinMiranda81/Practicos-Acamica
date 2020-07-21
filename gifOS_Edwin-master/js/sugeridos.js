let picturediv = document.getElementById('gifSugeridos');
const fixedGifs = [
  "Avengers",
  "Spiderman",
  "Superman",
  "Batman",
  "Joker",
  "harley quinn",
  "Simpsons",
  "Loki",
  "jim carrey",
  "Star Wars",
  "adventure+time",
  "oh+shit",
  "rick+and+morty",
  "the+office",
  "sillicon+valley",
  "the+mandalorian",
  "pulp+fiction",
  "fight+club",
  "it",
  "godzilla",
  "anime",
  "trippy",
  "ron+swanson",
  "radiohead"];

let sugeridos = [];
function fixedSugeridos(){

  for (var i = 0; i < 4; i++) {
    let randomSugeridos = fixedGifs[Math.floor(Math.random()*fixedGifs.length)];
    sugeridos.push(randomSugeridos)
    console.log(sugeridos)
    
    let searchUrl= `${apiRandom}api_key=${apiKey}&tag=${randomSugeridos} &rating=pg-13` ;
    
    fetch(searchUrl)
    .then(response => {
      return response.json();
      })
      
      .then(json => {
        
        let obj = json.data;
        let url = obj.images.original.url;
        let hashtag = obj.title;
        let slug = obj.slug;
        console.log(obj)
        
        if(hashtag === ""){
          if (slug!==""){
            hashtag = slug;
          }
          else{
            hashtag = randomSugeridos;
          }
          
        }

        const nuevacaja = document.createElement('div')
        nuevacaja.classList.add('contenidoBox');
        picturediv.appendChild(nuevacaja);

        const nuevotitle = document.createElement('div')
        nuevotitle.classList.add('contenidoBoxTit');
        nuevacaja.appendChild(nuevotitle);

        const giftitle = document.createElement('p')
        giftitle.classList.add('contenidoBoxTitP');
        nuevotitle.appendChild(giftitle);
        giftitle.innerHTML = `# ${obj.title}`;

        const close = document.createElement('img');
        close.classList.add('closebutton');
        close.src = "./images/button3.svg";
        nuevotitle.appendChild(close);

        const nuevaImagen = document.createElement('img')
        nuevaImagen.classList.add('contenidoImg');
        nuevacaja.appendChild(nuevaImagen);
        nuevaImagen.src = url;

        const button = document.createElement('button')
        button.classList.add('vermas');
        nuevacaja.appendChild(button);
        button.onclick = function buscarBotonVerMas(event) {
          
          document.querySelector(".verMasSugerido").style.display = "block";
          document.querySelector(".tendencia").style.display = "none";     
          document.getElementById('gridSugerido').innerHTML = '';
          document.getElementById("sugeridoTitle").innerHTML = `${hashtag} [resultado]`
          
          
          var searchValue = hashtag;
          console.log(searchValue);
          
          let searchitemsurl = `${apiSearch}api_key=${apiKey}&q=${searchValue}&limit=24&offset=0&rating=G&lang=en`;
          
          fetch(searchitemsurl)
              .then(response => {
                return response.json();
                })
              .then(json => {
                json.data.forEach (item => {
                  gifdiv = document.getElementById('gridSugerido');
                  gifurl = item.images.original.url;
                  titulo = item.title;
                  
                  gifImagen(gifurl,titulo);
                  
                });
            });
            event.stopPropagation();
        };
        const textoBoton = document.createElement('p')
        textoBoton.classList.add('verMasP');
        button.appendChild(textoBoton);
        
        var vermastext = document.createTextNode("Ver más");
        textoBoton.appendChild(vermastext);
        });
        
    };
};

fixedSugeridos();