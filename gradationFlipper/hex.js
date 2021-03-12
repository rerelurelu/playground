const colors = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  'A', 'B', 'C', 'D', 'E', 'F'
]

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function () {
  
  let color1 = '#'
  let color2 = '#'

  for (let i = 0; i < 6; i++) {
    color1 += colors[getRandomNumber()]
    color2 += colors[getRandomNumber()]
  }

  document.body.style.background = `linear-gradient(to bottom, ${color1}, ${color2})`
  color.textContent = `${color1} -> ${color2}`
})

function getRandomNumber () {
  return Math.floor(Math.random() * colors.length)
}
