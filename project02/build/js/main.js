const initApp = () => {
    const btn = document.querySelector("#hamburger-open")
    const menu = document.querySelector("#mobile-menu")

    const toggleMenu = () => {
        menu.classList.toggle('hidden')
        menu.classList.toggle('flex')
        btn.classList.toggle('toggle-btn')
    }
    btn.addEventListener('click',toggleMenu)
    menu.addEventListener('click',toggleMenu)
}

document.addEventListener('DOMContentLoaded',initApp)