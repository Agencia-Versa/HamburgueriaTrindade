const EMenuButton = document.querySelector('.icon.hamburger')
const ENavMenu = document.querySelector('.nav-menu')

function openMenu(){
    ENavMenu.classList.add('mobile')
    EMenuButton.innerHTML = 'close'
}
function closeMenu(){
    ENavMenu.classList.remove('mobile')
    EMenuButton.innerHTML = 'menu'
}

EMenuButton.addEventListener('click', () => {
    if(ENavMenu.classList.contains('mobile')){
        closeMenu()
    } else {
        openMenu()
    }
})

const EMenuLinks = Array.from(ENavMenu.children)

EMenuLinks.forEach(element => {
    element.addEventListener('click', () => {
        if(ENavMenu.classList.contains('mobile')){
            closeMenu()
        }
    })
});