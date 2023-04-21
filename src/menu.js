function loadMenu() {
    const contentDiv = document.getElementById('content');

    const menuList = document.createElement('ul');
    menuList.className = 'menu-list'; 

    const menuItem1 = document.createElement('li');
    menuItem1.className = 'menu-items';
    menuItem1.innerText = `Mystery Pizza - $2`;

    const menuItem2 = document.createElement('li');
    menuItem2.className = 'menu-items';
    menuItem2.innerText = `Saucy Serpents - $100`;

    const menuItem3 = document.createElement('li');
    menuItem3.className = 'menu-items';
    menuItem3.innerText = `Mug-o-Glug - ??`;

    menuList.appendChild(menuItem1);
    menuList.appendChild(menuItem2);
    menuList.appendChild(menuItem3);
    contentDiv.appendChild(menuList);
}

export default loadMenu;
