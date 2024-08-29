const scriptURL = 'https://script.google.com/macros/s/AKfycbwyCO35ZPkUaQqi1-oimM5S-Dqo-K2Od5N2p29sXVW_0FG3GFnpoGmnS-h9mojoZU6uFQ/exec'


const form = document.forms['contact-form']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})