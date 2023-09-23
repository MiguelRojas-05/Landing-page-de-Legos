const Boton1 = document.getElementById('button1');
const Boton2 = document.getElementById('button2');
const Boton3 = document.getElementById('button3');
const Modal = document.querySelector(".modal");
const botonCerrar = document.querySelector(".closeButton");
const ImgOneModal = document.querySelector(".modalImg1");
const ImgSecondModal = document.querySelector(".modalImg2");
const ImgThirdModal = document.querySelector(".modalImg3");

function CloseModal(){
  Modal.classList.add('hidden');
  ImgOneModal.classList.remove('batman1','robbin1');
  ImgSecondModal.classList.remove('batman2','robbin2');
  ImgThirdModal.classList.remove('batman3','robbin3');

}
function openCloseModalAraña(){
  Modal.classList.remove("hidden");
}
function openCloseModalBatman(){
  Modal.classList.remove('hidden');
  ImgOneModal.classList.add('batman1');
  ImgSecondModal.classList.add('batman2');
  ImgThirdModal.classList.add('batman3');
}
function openCloseModalRobbin(){
  Modal.classList.remove('hidden');
  ImgOneModal.classList.add('robbin1');
  ImgSecondModal.classList.add('robbin2');
  ImgThirdModal.classList.add('robbin3');
}
Boton1.addEventListener('click',openCloseModalAraña)
Boton2.addEventListener('click',openCloseModalBatman)
Boton3.addEventListener('click',openCloseModalRobbin)

botonCerrar.addEventListener('click',CloseModal)
