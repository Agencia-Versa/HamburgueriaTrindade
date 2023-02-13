const EMenuButton = document.querySelector('.icon.hamburger')
const ENavMenu = document.querySelector('.nav-menu')

function openMenu(){}
function closeMenu(){}

EMenuButton.addEventListener('click', () => {
    if(ENavMenu.classList.contains('mobile')){
        ENavMenu.classList.remove('mobile')
        EMenuButton.innerHTML = 'menu'
    } else {
        ENavMenu.classList.add('mobile')
        EMenuButton.innerHTML = 'close'
    }
})