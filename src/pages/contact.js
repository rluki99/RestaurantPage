import createNav from "../modules/nav"

const createContact = () => {
    createNav()

    const container = document.querySelector('.container')

    const contact = document.createElement('section')
    contact.classList.add('contact','section')

    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')

    const title = document.createElement('h2')
	title.classList.add('contact__title')
    title.textContent = 'nocturne'

	const header = document.createElement('h3')
	header.classList.add('contact__header')
    header.textContent = 'contact'

    const infoBox = document.createElement('div')
    infoBox.classList.add('contact__box')

    const info1 = document.createElement('div')
    info1.classList.add('contact__box-single')
    info1.innerHTML = `<h3 class="contact__box-header">contact us</h3>
    <p class="contact__box-info">+48 123 321 123</p>
    <p class="contact__box-info">contact@nocturne.com</p>`

    const info2 = document.createElement('div')
    info2.classList.add('contact__box-single')
    info2.innerHTML = `<h3 class="contact__box-header">address</h3>
    <p class="contact__box-info">180 Livingston St</p>
    <p class="contact__box-info">Brooklyn, NY</p>`

    const info3 = document.createElement('div')
    info3.classList.add('contact__box-single','contact__box-single--span')
    info3.innerHTML = `<h3 class="contact__box-header">hours</h3>
    <p class="contact__box-info">Tuesday: closed</p>
    <p class="contact__box-info">Tuesday: 12:00 - 22:00</p>
    <p class="contact__box-info">Wednesday: 12:00 - 22:00</p>
    <p class="contact__box-info">Thursday: 12:00 - 22:00</p>
    <p class="contact__box-info">Friday: 12:00 - 23:30</p>
    <p class="contact__box-info">Saturday: 12:00 - 23:30</p>
    <p class="contact__box-info">Sunday: 12:00 - 23:30</p>`

    container.appendChild(contact)
    contact.appendChild(wrapper)
    wrapper.append(title, header,infoBox)
    infoBox.append(info1,info2,info3)
}

export default createContact