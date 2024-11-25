let score = 0;

const counterElement = document.querySelector('.counter');
const dzetaButton = document.getElementById('dzeta-button');

dzetaButton.addEventListener('click', () => {
  score++;
  counterElement.textContent = score;
});
