function loadHome() {
    const docBody = document.querySelector('body');
    const contentDiv = document.getElementById('content');

    const homeHeroText = document.createElement('div');
    homeHeroText.className = 'home-hero-text'; 
    homeHeroText.innerText = 'OH MY GOD WHY IS THIS SO DELICIOUS?';

    const homeImg = document.createElement('img');
    homeImg.className = 'home-img';
    homeImg.src = '../src/food.jpg';
    homeImg.alt = 'Sauce being spooned over a salmon cutlet';

    docBody.style.color = 'white';
    docBody.style.backgroundImage = 'url(../src/food.jpg)';

    contentDiv.appendChild(homeHeroText);
}

export default loadHome;