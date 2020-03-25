window.onscroll = () => {
    return scrolled();
};


const scrolled = () => {
    const topnav = document.querySelector(".nav-container");
    const header = document.querySelector(".header");

    if (window.pageYOffset > header.offsetHeight) {
        topnav.classList.add("sticky");
    } else {
        topnav.classList.remove("sticky");
    }
};