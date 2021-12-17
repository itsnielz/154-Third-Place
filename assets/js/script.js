window.onscroll = function() {
    const navbar = document.querySelector('nav')


    const navText = document.getElementById('nav-text')


    // pageYOffset or scrollY
    if (window.pageYOffset > 0) {
        navbar.classList.add('scrolled')
        navText.classList.add('afterTextScrolled')
    } else {
        navbar.classList.remove('scrolled')
        navText.classList.remove('afterTextScrolled')
    }
}