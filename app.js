const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.nav-list ul');
const menuItems = document.querySelectorAll('.nav-list ul li a');
const header = document.querySelector('#header .header');

if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
}

menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger?.classList.remove('active');
        mobileMenu?.classList.remove('active');
    });
});

if (header) {
    document.addEventListener('scroll', () => {
        const isScrolled = window.scrollY > 70;
        header.style.backgroundColor = isScrolled
            ? 'rgba(4, 6, 7, 0.96)'
            : 'rgba(4, 6, 7, 0.82)';
        header.style.boxShadow = isScrolled
            ? '0 12px 35px rgba(0, 0, 0, 0.28)'
            : 'none';
    });
}
