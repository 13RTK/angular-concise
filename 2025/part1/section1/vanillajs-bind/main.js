const inputElement = document.querySelector('input');
const paragraphElement = document.querySelector('p');

inputElement.addEventListener('input', (event) => {
  paragraphElement.textContent = event.target.value;
});
