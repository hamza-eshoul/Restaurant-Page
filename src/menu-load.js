function loadmyMenu () {

    // Menu Cards  //

    const myMenu = document.createElement('div');
    myMenu.classList.add('menus')

    // Card 1 // 

    const myMenuCard1 = document.createElement('div');
    myMenuCard1.classList.add('menu-card');

    const myMenuHeading1 = document.createElement('h2');
    myMenuHeading1.innerHTML = 'Fajitas';

    const myMenuItems1 = document.createElement('div');
    myMenuItems1.classList.add('menu-item');

    myMenuCard1.append(myMenuHeading1, myMenuItems1);

    const myMenuList1 = document.createElement('ul');

    const myMenuListA = document.createElement('li');
    myMenuListA.innerHTML = '- Frites';
    const myMenuListB = document.createElement('li');
    myMenuListB.innerHTML = '- Pâtes ';
    const myMenuListC = document.createElement('li');
    myMenuListC.innerHTML = ' - Bolettes de dinde';


    myMenuList1.append(myMenuListA, myMenuListB, myMenuListC);

    const myMenuImg1 = new Image();
    myMenuImg1.src = '../images/fajitas.png';

    myMenuItems1.append(myMenuList1, myMenuImg1);


    // Card 2 // 

    const myMenuCard2 = document.createElement('div');
    myMenuCard2.classList.add('menu-card');

    const myMenuHeading2 = document.createElement('h2');
    myMenuHeading2.innerHTML = 'Tagliatelle Basquais';

    const myMenuItems2 = document.createElement('div');
    myMenuItems2.classList.add('menu-item');

    myMenuCard2.append(myMenuHeading2, myMenuItems2);

    const myMenuList2 = document.createElement('ul');

    const myMenuListD = document.createElement('li');
    myMenuListD.innerHTML = '- Poulet';
    const myMenuListE = document.createElement('li');
    myMenuListE.innerHTML = '- Tagliyatelle ';
    const myMenuListF = document.createElement('li');
    myMenuListF.innerHTML = ' - Fromage rouge ';


    myMenuList2.append(myMenuListD, myMenuListE, myMenuListF);

    const myMenuImg2 = new Image();
    myMenuImg2.src = '../images/tagliyatelle.jpeg';

    myMenuItems2.append(myMenuList2, myMenuImg2);

    // Card 3 // 

    const myMenuCard3 = document.createElement('div');
    myMenuCard3.classList.add('menu-card');

    const myMenuHeading3 = document.createElement('h2');
    myMenuHeading3.innerHTML = 'Salade Maison';

    const myMenuItems3 = document.createElement('div');
    myMenuItems3.classList.add('menu-item');

    myMenuCard3.append(myMenuHeading3, myMenuItems3);

    const myMenuList3 = document.createElement('ul');

    const myMenuListG = document.createElement('li');
    myMenuListG.innerHTML = '- Laitue, Riz, Fromage';
    const myMenuListH = document.createElement('li');
    myMenuListH.innerHTML = '- Mais, Thon, Ananas ';
    const myMenuListI = document.createElement('li');
    myMenuListI.innerHTML = ' - Crevette, Noix' ;


    myMenuList3.append(myMenuListG, myMenuListH, myMenuListI);

    const myMenuImg3 = new Image();
    myMenuImg3.src = '../images/salade.jpeg';

    myMenuItems3.append(myMenuList3, myMenuImg3);

    // Card 4 // 
    const myMenuCard4 = document.createElement('div');
    myMenuCard4.classList.add('menu-card');

    const myMenuHeading4 = document.createElement('h2');
    myMenuHeading4.innerHTML = 'Shawarma';

    const myMenuItems4 = document.createElement('div');
    myMenuItems4.classList.add('menu-item');

    myMenuCard4.append(myMenuHeading4, myMenuItems4);

    const myMenuList4 = document.createElement('ul');

    const myMenuListJ = document.createElement('li');
    myMenuListJ.innerHTML = '- Kebab ';
    const myMenuListK = document.createElement('li');
    myMenuListK.innerHTML = '- Salade';
    const myMenuListL = document.createElement('li');
    myMenuListL.innerHTML = ' - Pain Libanais ';


    myMenuList4.append(myMenuListJ, myMenuListK, myMenuListL);

    const myMenuImg4 = new Image();
    myMenuImg4.src = '../images/shawarma.jpeg';

    myMenuItems4.append(myMenuList4, myMenuImg4);

    myMenu.append(myMenuCard1, myMenuCard2, myMenuCard3, myMenuCard4);
 
    return myMenu;
}



export { loadmyMenu };

