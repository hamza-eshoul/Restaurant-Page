function loadmyContact () {
    
    // Contact Info  //

    const myContact = document.createElement('div');
    myContact.classList.add('contact');


    // Material Contact  // 

    const myMaterialContact = document.createElement('div');
    myMaterialContact.classList.add('contact-info');

    const myMaterialHeader = document.createElement('h2');
    myMaterialHeader.innerHTML = 'Material Contact';

    const myMaterialParagraph = document.createElement('p');
    myMaterialParagraph.innerHTML = ' If you wish to envigourate your life, visit us at     the following address :'

    const myMaterialAddress = document.createElement('p');
    myMaterialAddress.innerHTML = 'Via da Marias 67, 7514 Sils im Engadin, Suisse'; 


    myMaterialContact.append(myMaterialHeader, myMaterialParagraph, myMaterialAddress);
    


    // Immaterial Contact  // 

    const myImmaterialContact = document.createElement('div');
    myImmaterialContact.classList.add('contact-info');

    const myImmaterialHeader = document.createElement('h2');
    myImmaterialHeader.innerHTML = 'Immaterial Contact';

    const myImmaterialParagraph = document.createElement('p');
    myImmaterialParagraph.innerHTML = ' We are also present in the digital platforms : ';

    const myImmaterialList = document.createElement('ul');
   
    const myImmaterialLi1 = document.createElement('li');
    myImmaterialLi1.innerHTML = '- Facebook : www.facebook.com/Nietzschean-Restaurant';
    const myImmaterialLi2 = document.createElement('li');
    myImmaterialLi2.innerHTML = '- Twitter : www.twitter.com/Nietzschean-Restaurant';

    myImmaterialList.append(myImmaterialLi1, myImmaterialLi2);


    myImmaterialContact.append(myImmaterialHeader, myImmaterialParagraph, myImmaterialList);

  

    myContact.append( myMaterialContact, myImmaterialContact);

 
    return myContact;
}



export { loadmyContact };

