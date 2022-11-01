var botonesTutorial= document.getElementsByClassName("boton-tutorial")
botonesTutorial = Array.from(botonesTutorial)
console.log(botonesTutorial)
botonesTutorial.forEach(boton => {
    boton.addEventListener("click", function(){
        localStorage.setItem("tutorial",boton.id)
        window.location.href="./tutorial.html"
    })
});