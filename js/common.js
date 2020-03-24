window.onscroll = () => {
    return scrolled();
}


function scrolled() {
    topnav = document.querySelector(".nav-container");
    header = document.querySelector(".header");
    if (window.pageYOffset > header.offsetHeight) {
        topnav.classList.add("sticky");
    }else{
        topnav.classList.remove("sticky");
    }

}