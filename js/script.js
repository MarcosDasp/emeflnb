document.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const header = document.querySelector('header')

    if(window.scrollY > 0) {
        nav.classList.add('scrolled');
        header.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
        header.classList.remove('scrolled');
    }
});