let time = 0;
let running = 0;
  
  

function start() {
    setTimeout(function() {
      running = 1; 
      increment(); 
    }, 1000)
}  


function startPause() {
  if (running == 0 ) { 
    setTimeout(function() {
      running = 1; 
      increment(); 
    }, 1000)
  } else { 
    running = 0; 
  } 
} 
  
function reset() { 
  running = 0; 
  time = 0; 
  document.querySelector(reloj).innerHTML = "00:00:00"; 
} 
  
function increment() { 
  if (running == 1) { 
    setTimeout(function() { 
      time++; 
      var mins = Math.floor(time/10/60);
      var secs = Math.floor(time/100 % 60);
      var tenths = time % 100;
      
      if (mins < 10) { 
        mins = "0" + mins; 
      } 
      
      if (secs < 10) { 
        secs = "0" + secs; 
      } 
      
      document.querySelector(reloj).innerHTML = mins + ":" + secs + ":"  + "0" + tenths;
      
      increment(); 
       if (reloj != ".timer" || reloj == ".contTimer" ){
         segundos = tenths;
         console.log (reloj);
         console.log (segundos);
       }
        
       
    }, 1000);
    
  } 
}

    

 