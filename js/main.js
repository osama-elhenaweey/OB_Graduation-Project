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
