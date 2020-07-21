//Variables Globales:
const apiSearch = "https://api.giphy.com/v1/gifs/search?";
const apiRandom = "https://api.giphy.com/v1/gifs/random?";
const apiTrending = "https://api.giphy.com/v1/gifs/trending?";
const apiKey = "NX9EvGsbVgRA9fbaHMNfBjjQq6q2rCcI";
const search = document.getElementById("inputBuscar");
let nuevogif = [];
let divtitle = [];
let nGif = 0;


//Variables para el grid:
let gifdiv = [];
let gifurl = [];
let titulo = [];

window.addEventListener("load", function(event) {

document.querySelector('.logoMisGifos').style.display = "none";
search.addEventListener('input', () => searchStates(search.value));
document.querySelector(".busqueda").style.display = "none";
document.querySelector(".verMasSugerido").style.display = "none";
document.querySelector(".misGif").style.display = "none";

});