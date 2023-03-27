const btnToggleMenu = document.querySelector('#btnToggleMenu')
const menuList = document.querySelector('#menu-list')
const backdropMenu = document.querySelector('#backdrop-menu')

btnToggleMenu.addEventListener("click", function() {
    btnToggleMenu.classList.toggle('active')
    menuList.classList.toggle('active')
    backdropMenu.classList.toggle('active')
})

backdropMenu.addEventListener('click', function(){
    btnToggleMenu.classList.toggle('active')
    menuList.classList.toggle('active')
    backdropMenu.classList.toggle('active')
})