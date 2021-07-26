'use strict'

const button = document.getElementById('btn')
const inputField = document.getElementById('field')

button.addEventListener('click', (e) => {
   e.preventDefault()

   inputField.classList.toggle('active')

   
})