function loadContact() {
    const contentDiv = document.getElementById('content');

    const contactDiv = document.createElement('div');
    contactDiv.className = 'contact-div';
    contactDiv.innerText = `if you have any issue please do not hesitate to call...
    you may call Mr. Chef directly...
    PHONE: 666-666-6666
    or you may email Mr. Chef....
    EMAIL: iamthechef@chefmail.com
    please visit our restaurant....
    located in **********
`
    contentDiv.appendChild(contactDiv);
}

export default loadContact;