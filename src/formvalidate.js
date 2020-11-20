 
const name = document.querySelector('._name');
const email = document.querySelector('._email');
const textarea = document.querySelector('.textarea');
const form = document.getElementById('form');

document.querySelector('.form__button').onclick = function(e,str) {
    if (name.value == '' || name.value == null ) {
        name.classList.add('_error')
    }else {
        name.classList.remove('_error');
    }
    if (name.value == '' || name.value == null ) {
        email.classList.add('_error')
    }if(email.value.includes('@')) {
        email.classList.remove('_error');
    }
    
  e.preventDefault();
}

