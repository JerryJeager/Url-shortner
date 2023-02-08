const hamburger = document.querySelector('.hamburger')
const menuLine1 = document.querySelector('.line1')
const menuLine2 = document.querySelector('.line2')
const menuLine3 = document.querySelector('.line3')
const navList = document.querySelector('.nav-list')




hamburger.addEventListener('click', () => {
    menuLine1.classList.toggle('line1-close')
    menuLine2.classList.toggle('line2-close')
    menuLine3.classList.toggle('line3-close')
    navList.classList.toggle('nav-list-closed')
})