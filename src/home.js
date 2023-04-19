function loadHome() {
    const contentDiv = document.getElementById('content');

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
    contentDiv.appendChild(header);

    const homeHeroText = document.createElement('div');
    homeHeroText.className = 'home-hero-text'; 
    homeHeroText.innerText = 'OH MY GOD, WHY IS THIS SO DELICIOUS?';

    const homeImg = document.createElement('img');
    homeImg.className = 'home-img';
    homeImg.src = '../src/food.jpg';
    homeImg.alt = 'Sauce being spooned over a salmon cutlet';

    const homeMainText = document.createElement('div');
    homeMainText.className = 'home-main-text';
    homeMainText.innerText = `are u ready? to eat? prepare... your body... your mind... 
    u never had food this good. EAT PRAY LOVE AND EAT AGAIN.`;

    contentDiv.appendChild(homeHeroText);
    contentDiv.appendChild(homeImg);
    contentDiv.appendChild(homeMainText);
}

export default loadHome;
