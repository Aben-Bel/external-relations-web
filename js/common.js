let header;
let topnav;
window.onload = ()=>{
    topnav = document.querySelector(".nav-container");
    header = document.querySelector(".header");
}
window.onscroll = () => {
    return scrolled();
}


function scrolled() {
    if (window.pageYOffset > header.offsetHeight) {
        topnav.classList.add("sticky");
    }else{
        topnav.classList.remove("sticky");
    }

}