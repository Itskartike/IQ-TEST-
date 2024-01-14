const scriptURL = 'Put your script here'
const form = document.forms['contact-form']
form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(() => { window.location.href="test/list.html"; })
.catch(error => console.error('Error!', error.message))})
