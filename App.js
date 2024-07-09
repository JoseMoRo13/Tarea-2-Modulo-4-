const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confrimPassord = document.getElementById('confirmPassword');
const error = document.getElementById('error');
error.style.color = 'red';


function enviarFormulario(){
    console.log('Enviando formulario...');
    
    const mensajerError = [];

    if(nombre.value === null || nombre.value === ''){
        mensajerError.push('Ingresa tu nombre');
    }

    if(password.value === null || password.value === ''){
        mensajerError.push('Ingresa tu password');
    }

    if(email.value === null || email.value === ''){
        mensajerError.push('Ingresa tu email');
    }

    if(confrimPassord.value === null || confrimPassord.value === ''){
        mensajerError.push('Confirma tu password');
    }

    error.innerHTML = mensajerError.join(', ');

    return false;
}