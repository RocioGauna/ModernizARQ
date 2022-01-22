const $form = document.querySelector('#form')
const $buttonMail = document.querySelector('#js-mail')

const mostrar = document.getElementById('main-button');
const enviar = document.getElementById('main-ventana');
const quitar = document.getElementById('form');

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    $buttonMail.setAttribute('href', `mailto:modernizarq@gmail.com?subject=${form.get('name')} ${form.get('email')} &body=${form.get('message')}`)
    $buttonMail.click()
}

mostrar.addEventListener('click', () => {
    // quitar.parentNode.removeChild(quitar);
});

mostrar.addEventListener('click', () => {
    enviar.classList.add('show');
});







