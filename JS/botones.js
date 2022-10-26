let btn = document.querySelectorAll(".text button");

function flujoEventos(e){
   e.preventDefault();
   e.stopPropagation();
   switch(e.target.className){
      case "1":
         window.location.assign('../Make_up.html');
      break;
      case "2":
         window.location.assign('https://open.spotify.com/user/31zw6dgkoyj5vumbfk2rtu52iqca')
      break;
   }
}

btn.forEach((boton) => {
   boton.addEventListener("click",flujoEventos)   
});