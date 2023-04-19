function loadHome() {
    const homeContentDiv = document.getElementById('content');

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

    homeContentDiv.appendChild(homeHeroText);
    homeContentDiv.appendChild(homeImg);
    homeContentDiv.appendChild(homeMainText);
}

export default loadHome;
