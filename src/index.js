import loadHome from "./home";


function createHeader() {
    const docBody = document.querySelector('body');

    const header = document.createElement('header');
    header.className = 'header';

    const homeTab = document.createElement('button');
    homeTab.className = 'home-tab';
    homeTab.innerText = 'home';

    const menuTab = document.createElement('button');
    menuTab.className = 'menu-tab';
    menuTab.innerText = 'menu';

    const contactTab = document.createElement('button');
    contactTab.className = 'contact-tab';
    contactTab.innerText = 'contact';

    header.appendChild(homeTab);
    header.appendChild(menuTab);
    header.appendChild(contactTab);
    docBody.prepend(header);
}

createHeader();
loadHome();