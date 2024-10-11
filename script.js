let lastScrollTop = 0;
const navbar = document.querySelector('.header-container');

function handleScroll() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        navbar.style.top = '-100px';
    } else {
        navbar.style.top = '0';
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}

function handleMouseMove(event) {
    if (event.clientY <= 50) {
        navbar.style.top = '0'; // 
    }
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('mousemove', handleMouseMove);
