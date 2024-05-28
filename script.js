window.addEventListener('scroll', function() {
    const elementsToAnimate = document.querySelectorAll('.container > *, #anasayfa > div, #sosyal-medya > div > *'); 
  
    elementsToAnimate.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (elementTop < windowHeight * 0.8) { // Ekranın %80'ine gelince
        element.classList.add('visible'); // 'visible' sınıfını ekle
      } 
      // else { 
      //   element.classList.remove('visible'); // (İsteğe bağlı) Yukarı kaydırınca efekti geri almak için
      // }
    });
  });

  const menuLinks = document.querySelectorAll('#menu a');

// Her bağlantı için tıklama olayını dinliyoruz
menuLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Varsayılan bağlantı davranışını engelle

    const targetId = this.getAttribute('href'); // Bağlantının href değerini al (örneğin, "#hakkımızda")
    const targetElement = document.querySelector(targetId); // İlgili öğeyi seçiyoruz

    // Yumuşak geçiş ile hedefe ilerliyoruz
    targetElement.scrollIntoView({
      behavior: 'smooth' 
    });
  });
});