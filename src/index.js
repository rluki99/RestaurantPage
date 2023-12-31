import createHome from './pages/home'
import createMenu from './pages/menu'
import createContact from './pages/contact'

import './styles/main.scss'

const container = document.getElementById('container')

createHome()

const home = () => {
    container.innerHTML = ''
    createHome()
}

const menu = () => {
    container.innerHTML = ''
    createMenu()
}

const contact = () => {
    container.innerHTML = ''
    createContact()
}

document.addEventListener('click', e => {
    const target = e.target.textContent

    if(target === 'home') home()
    if(target === 'menu') menu()
    if(target === 'contact') contact()
})
