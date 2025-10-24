const inputNombre = document.getElementById("inputNombre");
const inputAnimal = document.getElementById("inputAnimal");
const inputEdad = document.getElementById("inputEdad");
const inputRaza = document.getElementById("inputRaza");
const inputEstado = document.getElementById("inputEstado");
const Guardar = document.getElementById("Guardar");

Guardar.addEventListener('click', function() {
    const nombre = inputNombre.value;
    const animal = inputAnimal.value;
    const edad = inputEdad.value;
    const raza = inputRaza.value;
    const estado = inputEstado.value;

    const borrador = {
        nombre,
        animal,
        edad,
        raza,
        estado
    };

    console.log(borrador);
    const jsonString = JSON.stringify(borrador);
    console.log(jsonString);
    localStorage.setItem('borrador', jsonString);
});

document.addEventListener('DOMContentLoaded', ()=> {
    const dataLocal = localStorage.getItem('borrador');
    if (dataLocal) {

        const borrador = JSON.parse(dataLocal);
        console.log(borrador);

        inputNombre.value = borrador.nombre;
        inputAnimal.value = borrador.animal;
        inputEdad.value = borrador.edad;
        inputRaza.value = borrador.raza;
        inputEstado.value = borrador.estado;
    }
});