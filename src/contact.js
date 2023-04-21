function loadContact() {
    const docBody = document.querySelector('body');
    const contentDiv = document.getElementById('content');

    const contactDiv = document.createElement('div');
    contactDiv.className = 'contact-div';
    contactDiv.innerText = `If you have any issue please do not hesitate to call...

    you may call Mr. Chef directly...

    Phone: 666-666-6666

    or you may email Mr. Chef....

    Email: iamthechef@chefmail.com`
    
    contentDiv.appendChild(contactDiv);

    docBody.style.backgroundImage = 'url(./images/restaurant.jpg)';
}

export default loadContact;