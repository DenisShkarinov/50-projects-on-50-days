'use strict'

const progress = document.getElementById('progress')
const next = document.getElementById('next')
const prev = document.getElementById('prev')

let width = +progress.style.width


next.addEventListener('click', () => {
   width += "31%"
   if (progress.style.width !== 0) {
      prev.disabled = false
   }
   console.log(width)
})

prev.addEventListener('click', () => {
   width -= "31%"
   
})
