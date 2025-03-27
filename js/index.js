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
