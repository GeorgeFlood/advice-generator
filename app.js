const adviceNumber = document.querySelector('#adviceNumber');
const advice = document.querySelector('#advice');
const requestAdvice = new XMLHttpRequest();
const dice = document.querySelector('.dice');

requestAdvice.open('GET', 'https://api.adviceslip.com/advice');
requestAdvice.send();



requestAdvice.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        e.preventDefault();
        const data = JSON.parse(e.target.responseText);
        advice.textContent = `"${data.slip.advice}"`;
        adviceNumber.textContent = ` # ${data.slip.id}`
    }
});



dice.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.reload();
});