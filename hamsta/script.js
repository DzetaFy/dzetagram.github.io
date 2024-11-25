let score = parseInt(localStorage.getItem('dzetaScore')) || 0; // Загружаем сохраненный счет или устанавливаем 0
let milestoneReached = localStorage.getItem('milestoneReached') === 'true'; // Проверяем, показывали ли уже сообщение

const counterElement = document.querySelector('.counter');
const dzetaButton = document.getElementById('dzeta-button');

// Отображаем сохраненный счет
counterElement.textContent = score;

// Добавляем обработчик кликов
dzetaButton.addEventListener('click', () => {
  score++;
  counterElement.textContent = score;
  localStorage.setItem('dzetaScore', score); // Сохраняем счет в LocalStorage

  // Проверяем достижение 20,000 кликов
  if (score >= 20000 && !milestoneReached) {
    showCongratulationsMessage();
    milestoneReached = true;
    localStorage.setItem('milestoneReached', 'true'); // Сохраняем состояние достижения
  }
});

// Функция для отображения сообщения
function showCongratulationsMessage() {
  const message = document.createElement('div');
  message.className = 'congrats-message';
  message.textContent = 'Поздравляю, напишите в Telegram @zawarkayt_spotify что вы на-тапали 20,000 кликов.';
  document.body.appendChild(message);

  // Убираем сообщение через 10 секунд
  setTimeout(() => {
    message.remove();
  }, 20000);
}
