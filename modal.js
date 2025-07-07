let modal = document.getElementsByClassName("modal-fade")[0]

modal.getElementsByClassName("closeBtn")[0].addEventListener('click', ()=>{
    CloseModal();
})


function CloseModal(){
    modal.classList.add('d-none')
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
}

function OpenModal(){
    modal.classList.remove('d-none')
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
}