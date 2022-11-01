let Mitos_a = document.querySelectorAll("#Mitos-li ul li a");
function flujoMitos(e)
{
    e.preventDefault();
    e.stopPropagation();
    let article = document.getElementById(e.target.className)
    article.style.display = "inline-block"
    for(let i = 0; i<Mitos_a.length; i++)
    {
        if(Mitos_a[i].className !== e.target.className)
        {
            let article = document.getElementById(Mitos_a[i].className)
            article.style.display = "none";
        }
    }
}

Mitos_a.forEach((a)=>{
    a.addEventListener("click",flujoMitos)
})

let Advertencias_a = document.querySelectorAll("#Advertencias-li ul li a");

function flujoAdvertencias(e)
{
    e.preventDefault();
    e.stopPropagation();
    let article = document.getElementById(e.target.className)
    article.style.display = "inline-block"
    for(let i = 0; i<Advertencias_a.length; i++)
    {
        if(Advertencias_a[i].className !== e.target.className)
        {
            let article = document.getElementById(Advertencias_a[i].className)
            article.style.display = "none";
        }
    }
}

Advertencias_a.forEach((a)=>{
    a.addEventListener("click",flujoAdvertencias)
})

let Curiosidades_a = document.querySelectorAll("#curiosidades-li ul li a");

function flujoCuriosidades(e)
{
    e.preventDefault();
    e.stopPropagation();
    let article = document.getElementById(e.target.className)
    article.style.display = "inline-block"
    for(let i = 0; i<Curiosidades_a.length; i++)
    {
        if(Curiosidades_a[i].className !== e.target.className)
        {
            let article = document.getElementById(Curiosidades_a[i].className)
            article.style.display = "none";
        }
    }
}

Curiosidades_a.forEach((a)=>{
    a.addEventListener("click",flujoCuriosidades)
})