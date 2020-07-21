let imagess = document.getElementById('imageness');
let recorder;
let dateStarted;
let camera;
let image = document.getElementById('imagen');
let nuevoVideo = document.getElementById('isavideo');
let form = new FormData();
let urlMisGif = [];
let apiKey = 'NX9EvGsbVgRA9fbaHMNfBjjQq6q2rCcI';
let upLoadKey = `https://upload.giphy.com/v1/gifs?api_key=${apiKey}`;
let resultDisplay = document.getElementById('gridMisGif');
let downloadref = document.getElementById('btn-download');
let segundos =[];
let reloj = [];
let urlGif = "";




let first = document.getElementById("window1");   
let second = document.getElementById("window2");
let third = document.getElementById("window3"); 
let fourth = document.getElementById("window4");  
let fifth = document.getElementById("window5");   
let sixth = document.getElementById("window6");
let smallprev = document.getElementById("small");

document.querySelector('.logo').style.display = "none";


document.getElementById("record").addEventListener("click", function () {
 
   first.style.display = "none";
});

document.querySelector(".btnCrear").addEventListener("click", function () {
 
  first.style.display = "block";
});


document.getElementById("btn-cancel").onclick = function () {
    first.style.display = "none";
};

document.getElementById("btn-start").onclick = function hideShow1 () {
    first.style.display = "none";
    second.style.display = "flex";
    verImagen();
};

document.getElementById("btn-start-recording").onclick = function hideShow2 () {
    second.style.display = "none";
    third.style.display = "flex";
    reloj = ".contTimer";
    startRecordingNow();
    reset();
    startPause();
    
};

document.getElementById("btn-stop-recording").onclick = function hideShow3 () {
    third.style.display = "none";
    fourth.style.display = "flex";
    reloj = ".timer";
    reset();
    previoGif();
    stopRecordingNow();
};

document.getElementById("btn-repetir").onclick = function hideShow6 ()  {
    fourth.style.display = "none";
    second.style.display = "flex";
    reloj = ".contTimer";
    clear();
    reset();
};

//volver a iniciar el ciclo en la ultima pantalla
document.getElementById("btn-done").onclick = function hideall () {
  sixth.style.display = "none";
  first.style.display = "block"
};

document.getElementById("btn-upload").onclick = function hideShow5 () {
  fourth.style.display = "none";
  fifth.style.display = "block";
  postgif(),
  move();
};

function hideShow4 () {
  fourth.style.display = "none";
  fifth.style.display = "block";
}; 

 //cancela la carga del guif, y vuelve a la primera ventana
document.getElementById("btn-cancel2").onclick = function myStopFunction () {
  clearTimeout(finishupload);
  fifth.style.display = "none";
  first.style.display = "block";
};
