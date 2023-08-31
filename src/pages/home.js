import createNav from "../modules/nav";

const createHome = () => {
    createNav()
    const container = document.querySelector('.container')

    const header = document.createElement('header')
    header.classList.add('header')

    const headerTextsBox = document.createElement('div')
    headerTextsBox.classList.add('header__texts')

    const subtitle = document.createElement('span')
    subtitle.classList.add('header__texts-subtitle')
    subtitle.textContent = 'grill restaurant'

    const title = document.createElement('h1')
    title.classList.add('header__texts-title')
    title.textContent = 'nocturne'

    container.appendChild(header)
    header.appendChild(headerTextsBox)
    headerTextsBox.appendChild(subtitle)
    headerTextsBox.appendChild(title)
}

export default createHome