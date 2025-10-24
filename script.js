let score = 0;
let time = 30;

const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');
const gameArea = document.getElementById('gameArea');

function spawnKitten() {
    gameArea.innerHTML = '';
    const kitten = document.createElement('img');
    kitten.src = 'https://cdn-icons-png.flaticon.com/512/616/616408.png';
    kitten.classList.add('kitten');

    // случайна позиция
    const maxX = gameArea.clientWidth - 50;
    const maxY = gameArea.clientHeight - 50;
    kitten.style.left = Math.random() * maxX + 'px';
    kitten.style.top = Math.random() * maxY + 'px';

    kitten.addEventListener('click', () => {
        score++;
        scoreDisplay.textContent = score;
        spawnKitten();
    });

    gameArea.appendChild(kitten);
}

// Таймер
const timer = setInterval(() => {
    time--;
    timeDisplay.textContent = time;
    if (time <= 0) {
        clearInterval(timer);
        gameArea.innerHTML = '<h2>Край! Твоят резултат: ' + score + '</h2>';
    }
}, 1000);

spawnKitten();
