/* ///////////////////// Map ///////////////////// */
let map;
// get the coordinates
navigator.geolocation.getCurrentPosition(function (position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coords = [latitude, longitude];
    map = L.map("map").setView(coords, 13);
    // the marker
    let marker = L.marker(coords).addTo(map);
    // the popup on the marker
    marker
        .bindPopup(
            L.popup({
                maxWidth: 250,
                minWidth: 100,
                autoClose: false,
                closeOnClick: false,
                className: "popup",
            })
        )
        .setPopupContent("We're From Here 🏠")
        .openPopup();
    // a style from leaflet for the map
    L.tileLayer("https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
});
/* ///////////////////// Map END///////////////////// */

/* ///////////////////// search box///////////////////// */
let openSearchBox = document.querySelector(".open-search-box");
let closeSearchBox = document.querySelector(".close-search-box");
let searchBox = document.querySelector(".search-box");
openSearchBox.addEventListener("click", function () {
    searchBox.classList.add("active");
});
closeSearchBox.addEventListener("click", function () {
    searchBox.classList.remove("active");
});
/* ///////////////////// search box END///////////////////// */
// Slider
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
// slider buttons
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");

let curSlide = 0;
let maxSlide = slides.length;
slider.addEventListener("click", function (e) {
    const clicks = e.target.classList.contains("slider__btn");

    if (!clicks) return;
    if (clicks) {
    }
});
slides.forEach((el, i) => {
    el.style.transform = `translateX(${100 * i}%)`;
});
const goToSlide = function (slide) {
    slides.forEach((el, i) => {
        el.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
};
goToSlide(0);

const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
        curSlide = 0;
    } else {
        curSlide++;
    }
    goToSlide(curSlide);
    activeDot(curSlide);
};
const prevSlide = function () {
    if (curSlide === 0) {
        curSlide = maxSlide - 1;
    } else {
        curSlide--;
    }
    goToSlide(curSlide);
    activeDot(curSlide);
};
btnRight.addEventListener("click", nextSlide);

btnLeft.addEventListener("click", prevSlide);

document.addEventListener("keydown", function (e) {
    if (e.key == "ArrowLeft") prevSlide();
    if (e.key == "ArrowRight") nextSlide();
});
