let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

//INTERACTIES!!!

//Slide
let frontend = document.querySelector('a:nth-of-type(1)')

frontend.addEventListener('click', slideHandler)
frontend.addEventListener('animationend', slideHandler)

function slideHandler() {
  frontend.classList.toggle('slide')
}


// Rotate
let Design = document.querySelector('a:nth-of-type(2)')

Design.addEventListener('click', rotateHandler)
Design.addEventListener('animationend', rotateHandler)

function rotateHandler() {
  Design.classList.toggle('rotate')
}


// Scale
let Scale = document.querySelector('a:nth-of-type(3)')

Scale.addEventListener('click', scaleHandler)
Scale.addEventListener('animationend', scaleHandler)

function scaleHandler() {
  Scale.classList.toggle('scale')
}

//scaledown
let Upsidedown = document.querySelector('a:nth-of-type(4)')

Upsidedown.addEventListener('click', UpsidedownHandler)
Upsidedown.addEventListener('animationend', UpsidedownHandler)

function UpsidedownHandler() {
  Upsidedown.classList.toggle('upsidedown')
}

//Color
let Color = document.querySelector('a:nth-of-type(5)')

Color.addEventListener('click', colorHandler)
Color.addEventListener('animationend', colorHandler)

function colorHandler() {
  Color.classList.toggle('color')
}

//Colorchange
let Colorchange = document.querySelector('a:nth-of-type(6)')

Colorchange.addEventListener('click', colorchangeHandler)
Colorchange.addEventListener('animationend', colorchangeHandler)

function colorchangeHandler() {
  Colorchange.classList.toggle('colorchange')
}

//Shake
let Shake = document.querySelector('a:nth-of-type(7)')

Shake.addEventListener('click', shakeHandler)
Shake.addEventListener('animationend', shakeHandler)

function shakeHandler() {
  Shake.classList.toggle('shake')
}

//Square
let Square = document.querySelector('a:nth-of-type(8)')

Square.addEventListener('click', squareHandler)
Square.addEventListener('animationend', squareHandler)

function squareHandler() {
  Square.classList.toggle('square')
}

//Stretch
let Stretch = document.querySelector('a:nth-of-type(9)')

Stretch.addEventListener('click', stretchHandler)
Stretch.addEventListener('animationend', stretchHandler)

function stretchHandler() {
  Stretch.classList.toggle('stretch')
}

//Thunder
let Thunder = document.querySelector('a:nth-of-type(10)')

Thunder.addEventListener('click', thunderHandler)
Thunder.addEventListener('animationend', thunderHandler)

function thunderHandler() {
  Thunder.classList.toggle('thunder')
}