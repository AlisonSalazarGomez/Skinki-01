var inputs = document.getElementsByClassName('formularioInput');
for (var i = 0; i < inputs.length; i++){
    inputs[i].addEventListener('keyup', function(){
        if(this.value.length >=1){
            this.nextElementSibling.classList.add('fijar');
        } else{
            this.nextElementSibling.classList.remove('fijar');
        }
    })
}
let input = document.getElementById("formularioSubmit");
input.addEventListener("click",(e)=>{
    e.preventDefault;
    window.location.assign('../cuidado-de-la-piel.html');
})