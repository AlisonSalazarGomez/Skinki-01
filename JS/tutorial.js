var titulo=document.getElementById("titulo")
var tutorial=localStorage.getItem("tutorial")
var video=document.getElementById("video")
titulo.textContent="tutorial "+tutorial
var tutorialesVideo={
principiante:`<iframe width="560" height="315" src="https://www.youtube.com/embed/BSTyuQV2nBw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
intermedio:`<iframe width="560" height="315" src="https://www.youtube.com/embed/BSTyuQV2nBw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
avanzado:`<iframe width="560" height="315" src="https://www.youtube.com/embed/BSTyuQV2nBw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
}
video.innerHTML=tutorialesVideo[tutorial]

