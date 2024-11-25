let score = parseInt(localStorage.getItem('dzetaScore')) || 0; // Загружаем сохраненный счет или устанавливаем 0

const counterElement = document.querySelector('.counter');
const dzetaButton = document.getElementById('dzeta-button');

// Отображаем сохраненный счет
counterElement.textContent = score;

// Добавляем обработчик кликов
dzetaButton.addEventListener('click', () => {
  score++;
  counterElement.textContent = score;
  localStorage.setItem('dzetaScore', score); // Сохраняем счет в LocalStorage
});
