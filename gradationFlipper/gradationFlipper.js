const colors = [
  {color1: '#DEE4EA', color2: '#F9FCFF'},
  {color1: '#5F0A87', color2: '#A4508B'},
  {color1: '#A88BEB', color2: '#F8CEEC'},
  {color1: '#F79AD3', color2: '#C86FC9'},
  {color1: '#5F72BE', color2: '#9921E8'},
  {color1: '#F6EBE6', color2: '#AEE1F9'},
  {color1: '#F5F7F6', color2: '#5CA0F2'},
  {color1: '#91A6FF', color2: '#FFFFFF'},
  {color1: '#FFFFFF', color2: '#E96196'},
]

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function () {
  const randomNumber = getRandomNumber()
  const gradationColor = Object.values(colors[randomNumber])

  document.body.style.background = 
    `linear-gradient(to bottom, ${gradationColor[0]}, ${gradationColor[1]})`
  
    color.textContent = `${gradationColor[0]} -> ${gradationColor[1]}`
})

function getRandomNumber () {
  return Math.floor(Math.random() * colors.length)
}
