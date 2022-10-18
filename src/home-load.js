
function loadmyFirstHome () {
    const myContent = document.createElement('div');
    myContent.classList.add('content-body');

    // Header //

    const myHeader = document.createElement('header');


    // Header Content  //

    const myHeaderContent = document.createElement('div');
    myHeaderContent.classList.add('header-content');

    const myHeaderImg = new Image();
    myHeaderImg.src = 'images/nitcha.jpeg';

    const myHeaderDiv = document.createElement('div');

    myHeaderContent.append(myHeaderImg, myHeaderDiv);
    
    const myHeaderDivP1 = document.createElement('p');
    myHeaderDivP1.classList.add('paragraph1');
    myHeaderDivP1.innerHTML = "Welcome to the Nietzschean restaurant";

    const myHeaderDivP2 = document.createElement('p');
    myHeaderDivP2.classList.add('paragraph2');
    myHeaderDivP2.innerHTML = "The restaurant that celebrates the will to life";

    myHeaderDiv.append(myHeaderDivP1,myHeaderDivP2)


    // Header Menu  //

    const myHeaderMenu = document.createElement('div');
    myHeaderMenu.classList.add('header-menu');


    const myHomeButton = document.createElement('button');
    myHomeButton.classList.add('myHome');
    myHomeButton.innerHTML = 'Home';

    const myMenuButton = document.createElement('button');
    myMenuButton.classList.add('myMenu');
    myMenuButton.innerHTML = 'Menu';

    const myContactButton = document.createElement('button');
    myContactButton.classList.add('myContact');
    myContactButton.innerHTML = 'Contact';

    myHeaderMenu.append(myHomeButton, myMenuButton, myContactButton);

    myHeader.append(myHeaderContent, myHeaderMenu)


    // Section //

    const mySection = document.createElement('section');

    const mySectionBody = document.createElement('div');
    mySectionBody.classList.add('section-body');

    mySection.appendChild(mySectionBody);

    const mySectionHeading = document.createElement('h1');
    mySectionHeading.innerHTML = "The food served in this restaurant is intended to feed and build Übermensches";

    const mySectionSpan = document.createElement('span');

    const mySectionP = document.createElement('p');
    mySectionP.innerHTML = 'Eating in this restaurant will reinforce the dyonisian passions within you and make you affirm life';

    mySectionBody.append(mySectionHeading, mySectionSpan, mySectionP);


    // Footer //

    const myFooter = document.createElement('footer');

    const myFooterP1 = document.createElement('p');
    myFooterP1.innerHTML = 'Created by Hamza Eshoul';

    const myFooterP2 = document.createElement('p');
    myFooterP2.innerHTML = 'Nietzschean Restaurant © 2022 | All Rights Reserved';

    myFooter.append(myFooterP1, myFooterP2);


    myContent.append(myHeader, mySection, myFooter);

    return myContent;
}

function loadmySecondHome () {

    // Section //

    const mySection = document.createElement('section');

    const mySectionBody = document.createElement('div');
    mySectionBody.classList.add('section-body');

    mySection.appendChild(mySectionBody);

    const mySectionHeading = document.createElement('h1');
    mySectionHeading.innerHTML = "The food served in this restaurant is intended to feed and build Übermensches";

    const mySectionSpan = document.createElement('span');

    const mySectionP = document.createElement('p');
    mySectionP.innerHTML = 'Eating in this restaurant will reinforce the dyonisian passions within you and make you affirm life';

    mySectionBody.append(mySectionHeading, mySectionSpan, mySectionP);

    return mySection;

}

export{ loadmyFirstHome, loadmySecondHome };
