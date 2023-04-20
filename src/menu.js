function loadMenu() {
    const contentDiv = document.getElementById('content');

    const menuList = document.createElement('ul');
    menuList.className = 'menu-list'; 

    const menuItem1 = document.createElement('li');
    menuItem1.className = 'menu-items';
    menuItem1.innerText = `mystery pizzaaaa
    we can't tell u the ingredients... good luck`;

    const menuItem2 = document.createElement('li');
    menuItem2.className = 'menu-items';
    menuItem2.innerText = `saucy serpents
    succulent serpentine snacks... suggest... satisfied slurping...`;

    const menuItem3 = document.createElement('li');
    menuItem3.className = 'menu-items';
    menuItem3.innerText = `mug-o-glug
    GLUG GLUG GLUG GLUG GLUG`;

    menuList.appendChild(menuItem1);
    menuList.appendChild(menuItem2);
    menuList.appendChild(menuItem3);
    contentDiv.appendChild(menuList);
}

export default loadMenu;
