const colors = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  'A', 'B', 'C', 'D', 'E', 'F',
];

let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    /* counter */
    const styles = e.currentTarget.classList;
    if (styles.contains('decrease')) {
      count -= 1;
    } else if (styles.contains('increase')) {
      count += 1;
    } else {
      count = 0;
    }
    value.textContent = count;

    /* change background */
    let color1 = '#';
    let color2 = '#';

    for (let i = 0; i < 6; i += 1) {
      color1 += colors[getRandomNumber()];
      color2 += colors[getRandomNumber()];
    }

    document.body.style.background = `linear-gradient(to bottom, ${color1}, ${color2})`;
  });
});
