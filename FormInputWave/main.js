'use strict'
const labels = document.querySelectorAll('.form-field label')
const button = document.querySelector('.btn')

console.log(labels)
labels.forEach(label => {
   label.innerHTML = label.innerText
   .split('')
   .map((letter, id) => `<span style="transition-delay:${id * 50}ms">${letter}</span>`)
   .join('')
})

button.addEventListener('click', (e) => {
   e.preventDefault();
})