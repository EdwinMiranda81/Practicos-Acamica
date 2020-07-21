let misGifs = "none";
let nGif = 0;
let misUrl = localStorage.getItem("urlMisGif");

if(localStorage.getItem("urlMisGif") !== null){
    urlMisGif = JSON.parse(misUrl);
    }

function cargarLocalStorage(){

    if(localStorage.getItem("urlMisGif") !== null){
    
      nGif = 0;
      
      urlMisGif.forEach(urlGif => {
        let idUrl ="";
          
        urlArray= urlGif.split("/");
        idUrl=urlArray[4];
        let mygifos = "https://api.giphy.com/v1/gifs/" + idUrl + "?&api_key=" +apiKey;
          
            function cargarMisGif() {
    
              fetch(mygifos) 
              .then(response => {
                return response.json();
              
              })
              
              .then(json => {
                console.log(json)
            
                  gifdiv = document.getElementById("gridMisGif");
                  gifurl = json.data.images.original.url;
                  titulo = json.data.title;
                  nGif=nGif++;
                  if ( titulo == ""  ){
                    titulo = localStorage.getItem(idUrl);
                    
                  }
                  gifImagen(gifurl,titulo); 
              })
              .catch(err => console.log(err));
            }
            cargarMisGif();
        });
    };
};       
cargarLocalStorage()

      
          
document.getElementById("gridMisGif").addEventListener("click",  function (id) {

  let selecGif = id.srcElement.src;
  urlArray= selecGif.split("/");
  idUrl=urlArray[4];
  let tituloG = id.srcElement.parentNode.children[1].textContent;
  let preg = prompt(`Eliminar ${tituloG} de misGifos?`,"SI")

  if (preg=="SI"){

    urlMisGif.forEach(elem => {

      let elemUrl = elem.split("/");
      idUrlGif = elemUrl[4];
      console.log(idUrlGif);
  
      if (idUrlGif == idUrl ){
        let index = urlMisGif.indexOf(elem);
        console.log(elem);
        console.log(index);
        
        urlMisGif.splice(index, 1); 
        console.log(urlMisGif)
        document.getElementById('gridMisGif').innerHTML ="" 
        localStorage.removeItem('urlMisGif');

        let urlArray= selecGif.split("/");
        let idUrl=urlArray[4];
        localStorage.removeItem(idUrl);
          
          
        localStorage.setItem("urlMisGif",JSON.stringify(urlMisGif));
        
        cargarLocalStorage();
        console.log(urlMisGif);
      }
    })
  }
}); 