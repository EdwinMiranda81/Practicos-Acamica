function captureCamera(callback) {
    navigator.mediaDevices.getUserMedia({
    video: true
    })
    .then(function(stream) {
      myvideo.srcObject = stream;
      myvideo.play();
      callback && callback(stream);
    })
    .catch(function(error) {
    alert("Ups, necesitamos tu cámara! Actualiza la página y vuelve a intentarlo");
    console.error(error);
    window.location.reload();
    });
  }
  
  
  
//ver preview
function verImagen(){
      navigator.mediaDevices.getUserMedia({
          audio: false,
          video: {
          height: {max: 480}
          }
      })
          .then(function(stream){
              nuevoVideo.srcObject = stream;
              nuevoVideo.play();
          })
          .catch(err => {
            console.log(err);
            alert('Unable to capture your camera. Please check console logs.');
            window.location.reload();
          })
      };
  
//graba el guif
function captureCamera(callback) {
    navigator.mediaDevices.getUserMedia({ 
        video: true 
    })
    .then(function(camera) {
        callback(camera);
    }).catch(function(error) {
        alert('Unable to capture your camera. Please check console logs.');
        console.error(error);
        window.location.reload();
       
    });
}


//empieza a grabar y genera un archivo de esa grabacion
function startRecordingNow() {
  
    /*this.disabled = true;*/
    captureCamera(function(camera) {
        recorder = RecordRTC(camera, {
            type: 'gif',
            frameRate: 1,
            quality: 10,
            width: 360,
            hidden: 240,
            onGifRecordingStarted: function() {
            },
            onGifPreview: function(gifURL) {
                image.src = gifURL;
            }
            
        });
       
        recorder.startRecording();
        recorder.camera = camera;
        document.getElementById('btn-stop-recording').disabled = false;
    });
};



//Reiniciar barra y contador

function clear () {
  clearInterval(timerId);
  timerId = false;
}
 

let timerId = false;

function previoGif (){
  if (!timerId) {
    timerId = setInterval ( function () { 

      if(!recorder || reloj == ".contTimer") {
        return;
      }
      else{
        start()
        move();
        reset();

      }

    }, segundos*1000);

  }
}
  

let nombre = null;  

function stopRecordingCallback() {
    imagess.src = URL.createObjectURL(recorder.getBlob()); /*para mostrar preview?*/
    descargaGif = URL.createObjectURL(recorder.getBlob());/*descarga URL*/
    console.log(descargaGif);

    
      let nameGif = prompt("Ingrese nombre del nuevo Gif:");
    
    if (nameGif == null || nameGif == "") { 
     nameGif = "Nuevo Gif";
     nombre = nameGif;
    }
    else{
      nombre = nameGif;
    }
    form.append('file', recorder.getBlob(), nombre);
    console.log(form.get('file'));
    //sino como freno la camara?
    nuevoVideo.srcObject = null;
    nuevoVideo.multer = false;
    nuevoVideo.volumen = 1;
    recorder.camera.stop();
    recorder.destroy();
}



function stopRecordingNow() {
    this.disabled = true;
    recorder.camera.stop();
    recorder.stopRecording(stopRecordingCallback);
};


function postgif() {

  var i = 0;

  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar2");
    var width = 1;
    var id = setInterval(frame, 40);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }

  finishupload = setTimeout(function(){ 
    fifth.style.display = "none";
    sixth.style.display = "block";
  }, 5000);
  
  
  fourth.style.display = "none";
  fifth.style.display = "flex";
  
  downloadref.href = descargaGif;
  
  
  
  ///////Con esto sube el Gif a Giphy
  
  fetch(upLoadKey, {
      method: "POST",
      body: form
  })
  .then(response => {
      console.log(response.status);
      return response.json();
  })
  .then(data =>{
      let dataId = data.data.id;
      fetch("https://api.giphy.com/v1/gifs/" + dataId + "?&api_key=" +apiKey)
          .then(response => {
              return response.json()
          })
          .then(obj => {
              console.log(obj)
              urlGif = obj.data.images.original.url;
              urlMisGif= urlMisGif.concat(urlGif);
              smallprev.src = urlGif;
            
              localStorage.setItem(dataId,JSON.stringify(nombre));
              localStorage.setItem("urlMisGif",JSON.stringify(urlMisGif));
              const trendCaja = document.createElement('div');
              resultDisplay.appendChild(trendCaja);          
              trendCaja.classList.add('gridCont');
              const nuevoGif = document.createElement('img');
              trendCaja.appendChild(nuevoGif);
              nuevoGif.src = urlGif;
              })
          })
  
}
  
  
  
//para copiar el enlace del guif (ultima pantalla)

document.getElementById('btn-copylink').addEventListener("click", () => {
  navigator.clipboard.writeText(urlGif);
  alert("Yay! Ya tenés tu enlace copiado al portapapeles");
})
  
//para hacer la barra de carga
function move() {
  var i = 0;
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, segundos*10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
  
  
 