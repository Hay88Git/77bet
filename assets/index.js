var swiper = new Swiper(".slide", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: true,
    interval: 1000,
    grabCursor: true,
    pauseOnMouseEnter: true,
    pagination: {
        el: ".swiper-pagination",
    },
});

// header animation
window.onscroll = function () {
    scrollFunction();
};
function scrollFunction() {
    if (document.documentElement.scrollTop > 80) {
        document.getElementById("header").style.top = "0";
    } else {
        document.getElementById("header").style.top = "-200px";
    }
}