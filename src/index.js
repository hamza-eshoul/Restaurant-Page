

import { loadmyFirstHome, loadmySecondHome } from './home-load';
import { loadmyMenu } from './menu-load';
import { loadmyContact } from './contact-load';

const myPage = document.getElementById('content');

myPage.appendChild(loadmyFirstHome());

// Home Button 

const myHomeButton = document.querySelector('.myHome');
myHomeButton.addEventListener('click', function() {

    const myContent = document.querySelector('.content-body');
    const mySecondChild = myContent.childNodes[1];
    myContent.removeChild(mySecondChild);

    const myFooterChild = myContent.lastChild;

    myContent.insertBefore(loadmySecondHome(), myFooterChild);

});

// Menu Button 

const myMenuButton = document.querySelector('.myMenu');
myMenuButton.addEventListener('click', function() {

    const myContent = document.querySelector('.content-body');
    const mySecondChild = myContent.childNodes[1];
    myContent.removeChild(mySecondChild);

    const myFooterChild = myContent.lastChild;

    myContent.insertBefore(loadmyMenu(), myFooterChild);

});

// Contact Button 


const myContactButton = document.querySelector('.myContact');
myContactButton.addEventListener('click', function() {

    const myContent = document.querySelector('.content-body');    
    const mySecondChild = myContent.childNodes[1];
    myContent.removeChild(mySecondChild);

    const myFooterChild = myContent.lastChild;

    myContent.insertBefore(loadmyContact(), myFooterChild);
});

