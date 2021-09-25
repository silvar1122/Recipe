const open_menu=document.querySelector('#open_menu');
const menu=document.querySelector('#menu');  

open_menu.addEventListener('click',()=>{

    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');

    }
    else{
        menu.classList.add('hidden');
    }
})