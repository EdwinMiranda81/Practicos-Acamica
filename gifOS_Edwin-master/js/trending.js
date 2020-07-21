let pathTrending = `${apiTrending}api_key=${apiKey}&limit=24&rating=G`;
  
  
  
function trendingGifs() {
  
  fetch(pathTrending) 
  .then(response => {
    return response.json();
  
  })
  
  .then(json => {
    console.log(json)

    json.data.forEach(item => {
      gifdiv = document.getElementById('gridTrending');
      gifurl = item.images.original.url;
      titulo = item.title;
      nGif=nGif++;
      
      gifImagen(gifurl,titulo);
      
      })
      
  })
  
  .catch(err => console.log(err));
}
trendingGifs();