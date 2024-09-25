
    const button = document.querySelector('.icon');
    const socialCard = document.querySelector('.social-card');

    button.addEventListener('click', ()=> {

       if( socialCard.style.display === 'none' ) {
            socialCard.style.display = 'flex'
       } else {
       socialCard.style.display ='none';
       }

   

    })
