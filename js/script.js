window.addEventListener('DOMContentLoaded', () =>{
  
  const btn = document.querySelector(".fa-bars"),
      nav = document.querySelector(".nav")
      navBar = document.querySelector(".nav__bar")

      btn.addEventListener('click', () => {
          nav.classList.add('show');
          nav.classList.remove('hide');
          console.log(7)
      });

      navBar.addEventListener('click', (e) =>{
        e.target;
        nav.forEach((item) =>{
          if(e.target == item){
            setTimeout(() =>{
              navBar.classList.add('hide');
              navBar.classList.remove('show');
            }, 5000)
          }
        })
      })
    
  
  
  
  
  
  
  
  
  
  
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    autoplay:{
      delay: 4000,
      disableOnInteraction: false,
  },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    
  });

















});