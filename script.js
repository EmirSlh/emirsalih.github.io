window.addEventListener('scroll', function() {
    const elementsToAnimate = document.querySelectorAll('.container > *, #anasayfa > div, #sosyal-medya > div > *'); 
  
    elementsToAnimate.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (elementTop < windowHeight * 0.8) { 
        element.classList.add('visible'); 
      } 
      
    });
  });

  const menuLinks = document.querySelectorAll('#menu a');

menuLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); 

    const targetId = this.getAttribute('href'); 
    const targetElement = document.querySelector(targetId); 

    targetElement.scrollIntoView({
      behavior: 'smooth' 
    });
  });
});
