window.addEventListener('DOMContentLoaded', () =>{
  
  const btn = document.querySelector(".fa-bars"),
      nav = document.querySelector(".nav"),
      navItem = document.querySelectorAll(".nav a");
      btn.addEventListener('click', () => {
          if(nav.classList.contains('show')){
            nav.classList.remove('show');
            nav.classList.add('hide');
          }
          else{
            nav.classList.add('show');
            nav.classList.remove('hide');
          }
          
      });

      nav.addEventListener('click', (e) =>{
        e.target;
        navItem.forEach((item) =>{
          if(e.target == item){
            setTimeout(() =>{
              nav.classList.add('hide');
              nav.classList.remove('show');
            }, 500)
          }
        })
      })


    const loader = document.querySelector('.loader');

  setTimeout(() => {
    loader.style.opacity = 0.5;
  }, 2700);
  setTimeout(() => {
    loader.style.display = 'none';
  }, 3000)


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