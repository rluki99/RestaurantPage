import createNav from '../modules/nav'

const createMenu = () => {
	createNav()

	const container = document.getElementById('container')

	const menu = document.createElement('section')
	menu.classList.add('menu', 'section')

	const wrapper = document.createElement('div')
	wrapper.classList.add('wrapper')

	const title = document.createElement('h2')
	title.classList.add('menu__title')
    title.textContent = 'nocturne'

	const header = document.createElement('h3')
	header.classList.add('menu__header')
    header.textContent = 'menu'

	const dishes = document.createElement('div')
	dishes.classList.add('menu__dishes')

	const dish1 = document.createElement('div')
    dish1.classList.add('menu__dish')
	dish1.innerHTML = `<img src="/burger-bgc.jpg" alt="" class="menu__dish-img">
    <p class="menu__dish-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur sequi amet assumenda corrupti eum pariatur ea possimus, nesciunt deserunt natus?</p>`

	const dish2 = document.createElement('div')
    dish2.classList.add('menu__dish')
	dish2.innerHTML = `<img src="/burger-bgc.jpg" alt="" class="menu__dish-img menu__dish-img--right">
    <p class="menu__dish-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur sequi amet assumenda corrupti eum pariatur ea possimus, nesciunt deserunt natus?</p>`

	const dish3 = document.createElement('div')
    dish3.classList.add('menu__dish')
	dish3.innerHTML = `<img src="/burger-bgc.jpg" alt="" class="menu__dish-img">
    <p class="menu__dish-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur sequi amet assumenda corrupti eum pariatur ea possimus, nesciunt deserunt natus?</p>`

	const dish4 = document.createElement('div')
    dish4.classList.add('menu__dish')
	dish4.innerHTML = `<img src="/burger-bgc.jpg" alt="" class="menu__dish-img menu__dish-img--right">
    <p class="menu__dish-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur sequi amet assumenda corrupti eum pariatur ea possimus, nesciunt deserunt natus?</p>`

    container.appendChild(menu)
    menu.appendChild(wrapper)
    wrapper.append(title, header, dishes)
    dishes.append(dish1,dish2,dish3,dish4)
}

export default createMenu