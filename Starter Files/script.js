// NavBar
const menu = document.querySelector('.menu')
const navBar = document.querySelector('.navbar')

menu.addEventListener('click',() =>{
    navBar.classList.toggle('change')
    menu.classList.toggle('change')
})

// End of NavBar