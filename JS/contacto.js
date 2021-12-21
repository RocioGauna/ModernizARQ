const mostrar = document.getElementById('main-button');
const enviar = document.getElementById('main-ventana');
const quitar = document.getElementById('main-form');

mostrar.addEventListener('click', () => {
    quitar.parentNode.removeChild(quitar);
});

mostrar.addEventListener('click', () => {
    enviar.classList.add('show');
});





