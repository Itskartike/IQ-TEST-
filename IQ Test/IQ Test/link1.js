const scriptURL = 'https://script.google.com/macros/s/AKfycbzU9l0XOyeMDe1OXQVw2vIjlETbUSa8mr6Fcr-t0yHlgah13u-JJsflQoF88KehSVJC/exec'
const form = document.forms['contact-form']
form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(() => { window.location.href="test/list.html"; })
.catch(error => console.error('Error!', error.message))})