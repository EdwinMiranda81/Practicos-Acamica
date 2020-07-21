  // Cambio de tema 'onclick'
  let body = document.getElementsByTagName("body")[0];

  function estiloDark(){
    body.className = "darkTheme";
    document.getElementById('desplegableTema').style.display = 'none';
    sessionStorage.setItem("tema", "dark")
    document.getElementById('logoImg').src = './images/gifOF_logo_dark.png';
    document.getElementById('logoImg2').src = './images/gifOF_logo_dark.png';
  }
  function estiloLight(){
    body.className = "";  
    document.getElementById('desplegableTema').style.display = 'none';
    sessionStorage.setItem("tema", "light")
    document.getElementById('logoImg').src = './images/gifOF_logo.png';
    document.getElementById('logoImg2').src = './images/gifOF_logo.png';
  }
  
  //para que el tema permanezca cuando se cambia de HTML
  function verificarTema() {
    if (sessionStorage.getItem("tema") === "dark") {
      body.className = "darkTheme";
      document.getElementById('logoImg').src = './images/gifOF_logo_dark.png';
      document.getElementById('logoImg2').src = './images/gifOF_logo_dark.png';
      }
      else if (sessionStorage.getItem("mode") === "light") {
        body.className = ""; 
        document.getElementById('logoImg').src = './images/gifOF_logo.png';
        document.getElementById('logoImg2').src = './images/gifOF_logo.png';
      }
  }
  verificarTema();