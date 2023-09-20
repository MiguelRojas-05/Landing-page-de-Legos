const Boton1 = document.getElementById('button1');
const Boton2 = document.getElementById('button2');
const Boton3 = document.getElementById('button3');
const Modal = document.querySelector(".modal");
const botonCerrar = document.querySelector(".closeButton") 


function openCloseModal(){
  Modal.classList.toggle("hidden");
  console.log("si esta bien");
}

Boton1.addEventListener('click',openCloseModal)
Boton2.addEventListener('click',openCloseModal)
Boton3.addEventListener('click',openCloseModal)
botonCerrar.addEventListener('click',openCloseModal)
