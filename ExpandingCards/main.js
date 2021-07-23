'use strict';

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
   card.addEventListener('click', () => {
      removeActiveState()
      card.classList.add('active')
   })
})

const removeActiveState = () => {
   cards.forEach(card => {
      card.classList.remove('active');
   })
}