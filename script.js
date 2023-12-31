var typed = new Typed(".multiple", {
    strings: ["Cô Nàng Thợ May ", "Cô Gái Cứng Đầu", "Cô Nàng Tánh Nóng"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})



window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset +height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
}



