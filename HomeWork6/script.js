const menuActive=document.querySelector('.hidden_menu');
const burger=document.querySelector('.burger');

function toggleMenu(){
    menuActive.classList.toggle('hidden');
}

burger.addEventListener('click',toggleMenu);