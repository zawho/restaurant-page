import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';
import './style.css';

const docBody = document.querySelector('body');
const homeTab = document.createElement('button');
const menuTab = document.createElement('button');
const contactTab = document.createElement('button');
const contentDiv = document.getElementById('content');

function createHeader() {
    const header = document.createElement('header');
    header.className = 'header';

    homeTab.className = 'home-tab';
    homeTab.innerText = 'Home';

    menuTab.className = 'menu-tab';
    menuTab.innerText = 'Menu';

    contactTab.className = 'contact-tab';
    contactTab.innerText = 'Contact';

    header.appendChild(homeTab);
    header.appendChild(menuTab);
    header.appendChild(contactTab);
    docBody.prepend(header);
}

function switchTab() {
    contentDiv.innerHTML = '';
    if (this === menuTab) {
        docBody.style.backgroundImage = '';
        docBody.style.color = 'black';
        loadMenu();
    } else if (this === contactTab) {
        docBody.style.backgroundImage = '';
        docBody.style.color = 'black';
        loadContact();
    } else {
        loadHome();
    }
}

homeTab.addEventListener('click', switchTab);
menuTab.addEventListener('click', switchTab);
contactTab.addEventListener('click', switchTab);

createHeader();
loadHome();