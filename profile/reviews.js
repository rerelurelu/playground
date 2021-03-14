// Person's information
const reviews = [
  {
    id: 1,
    author: 'Nelly Virsaladze',
    job: 'Designer',
    img: 
      'https://res.cloudinary.com/zoniha/image/upload/'
      + 'v1615732427/Reviews/person-1_jrv5uu.jpg',
    info:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      + 'Cras posuere feugiat faucibus. Aenean aliquam mi at laoreet consequat.'
      + 'In efficitur ullamcorper sapien, vel pretium velit.',
  },
  {
    id: 2,
    author: 'Kawa Da',
    job: 'Developer',
    img: 
      'https://res.cloudinary.com/zoniha/image/upload/'
      + 'v1615732427/Reviews/person-2_mjkqbc.jpg',
    info:
      'Pellentesque ullamcorper, nunc quis volutpat mollis,'
      + 'leo dui tincidunt nisl, id blandit diam leo sollicitudin urna.'
      + 'Integer fringilla ut metus at consectetur.'
      + 'Nullam id massa ante. Maecenas venenatis libero eget lobortis egestas.',
  },
  {
    id: 3,
    author: 'Zoni Ha',
    job: 'Data Scientist',
    img: 
      'https://res.cloudinary.com/zoniha/image/upload/'
      + 'v1615732427/Reviews/person-3_cjgyco.jpg',
    info:
      'Nam tempus nisl eu sodales laoreet. Fusce euismod, risus et auctor dignissim,'
      + 'ante sem semper ligula, id tristique nunc ex sit amet velit.'
      + 'Donec eu massa sit amet libero aliquet tempus.',
  },
]

// Select items
const img = document.getElementById('person-img')
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')

// Set starting item
let currentItem = 0

// Load initial item
window.addEventListener('DOMContentLoaded', function () {
  showPerson()
})


function showPerson () {
  const item = reviews[currentItem]
  img.src = item.img
  author.textContent = item.author
  job.textContent = item.job
  info.textContent = item.info
}

nextBtn.addEventListener('click', function () {
  /* Show next person */
  currentItem++
  
  if (currentItem > reviews.length - 1) {
    currentItem = 0
  }
  showPerson()
})

prevBtn.addEventListener('click', function () {
  /* Show previous person */
  currentItem--
  
  if (currentItem < 0 ) {
    currentItem = reviews.length - 1
  }
  showPerson()
})

randomBtn.addEventListener('click', function () {
  /* Show person randomly */
  i = currentItem
  while (i === currentItem){
    currentItem = Math.floor(Math.random() * reviews.length)
  }
  showPerson()
})