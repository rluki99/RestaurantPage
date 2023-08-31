const createNav = () => {
  const container = document.querySelector('.container')
  const nav = document.createElement('nav')
  nav.classList.add('nav')

  const navLinks = document.createElement('div')
  navLinks.classList.add('nav__links')

  const home = document.createElement('a')
  home.classList.add('nav__link')
  home.textContent = 'home'

  const menu = document.createElement('a')
  menu.classList.add('nav__link')
  menu.textContent = 'menu'

  const contact = document.createElement('a')
  contact.classList.add('nav__link','nav__link--span')
  contact.textContent = 'contact'

  container.appendChild(nav)
  nav.appendChild(navLinks)
  navLinks.appendChild(home)
  navLinks.appendChild(menu)
  navLinks.appendChild(contact)
}

export default createNav 