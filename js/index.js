

function scroll() { 
    var nav = document.getElementById("navbar"); 

    function scrollNav() {
        if (window.scrollY > 100) {
            nav.style.backgroundColor = "white";
            nav.classList.add("scrolled"); 
        } else {
            nav.style.backgroundColor = "transparent";
            nav.classList.remove("scrolled"); 
        }
    }

    window.addEventListener("scroll", scrollNav); 
}

scroll();


const swiperTwo = new Swiper('.reviews-swiper', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 768px
      768: {
        slidesPerView: 1,
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 2.5,
      },
    },
    
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: false,
    },
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
var swiper = new Swiper(".gallery-slider", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: { slidesPerView: 1 },
        576: { slidesPerView: 2 },
        768: { slidesPerView: 3 }
    }
});



function animateNumbers() {
    var counters = document.querySelectorAll(".stat-number");
    const speed = 200; 

    counters.forEach(counter => {
        counter.innerText = "0"; 

        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            let count = +counter.innerText.replace('+', '');
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment) + "+";
                setTimeout(updateCount, 20); 
            } else {
                counter.innerText = target + "+"; 
            }
        };

        updateCount(); 
    });
}


document.addEventListener("DOMContentLoaded", animateNumbers);



$(document).ready(function () {
    $('.profile-img').click(function () {
        $('.profile-img').removeClass('active-img');
        $(this).addClass('active-img');

        let id = $(this).data('id');
        $('.testimonial-card').removeClass('active');
        setTimeout(() => {
            $('.testimonial-card').hide();
            $('#testimonial-' + id).show().addClass('active');
        }, 200);
    });
});




