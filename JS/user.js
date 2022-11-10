
const nombre = 'Alison Salazar'
const divName = document.getElementById('name');

function cargarUsuarios(){
    fetch('data/data.json')
        .then(respuesta => respuesta.json())
        .then(usuarios => {
            usuarios.forEach(usuario => {
                if(usuario.Nombre_completo == nombre){
                    const h1 = document.createElement('h1');
                    h1.innerHTML = `${usuario.Nombre_completo}` 
                    h1.className = "inline";
                    divName.appendChild(h1);
                    cargarDescripcion(usuario.id,usuario.edad)
                }
            });
        });
}
function cargarDescripcion( id, edad){
    fetch('data/rutina.json')
        .then(respuesta => respuesta.json())
        .then(rutinas => {
            rutinas.forEach(rutina => {
                if(rutina.id_usuario == id){
                    console.log('hola')
                    const piel = document.getElementById('Tipo_piel');
                    const edad = document.getElementById('Edad');
                    const nivel = document.getElementById('Nivel_rutina');
                    const alergia = document.getElementById('Alergia');
                    
                    piel.innerText = rutina.Tipo_piel;
                    nivel.innerText = rutina.Nivel_rutina;
                    alergia.innerText = rutina.Alergia;
                }
            });
        });
}
cargarUsuarios();
/*const fs = require('fs');

const userNuevo = {
    modelo: "algo",
    produccion: 2002,
    millaje: 500
}

const newCar = Json.stringify(carroNuevo);
console.log(newCar);
fs.writeFile('cars.json', newCar,(error)=>{
    if (error) throw error;
    console.log('Informacion recibida');
})
*/