//DOM
const pageBody = document.querySelector("body");
const navBtn = document.querySelector('.nav-btn');
const navMenu = document.querySelector('.nav-menu');
const mapCase = document.querySelector('#map-case');


function toggleMenu() {
    const menuHeight = navMenu.offsetHeight;
    if (!navMenu.offsetHeight) {
        pageBody.classList.add('mobile')
    } else {
        pageBody.classList.remove('mobile')
    }
}



// google map api
const mapSpot = { lat: 25.0335398, lng: 121.5620666 };
function initMap() {
    //定位在台灣
    var map = new google.maps.Map(mapCase, {
        center: mapSpot,
        zoom: 16
    });
}

//標記地點
var marker = new google.maps.Marker({
    position: { lat: 25.02295, lng: 121.33210 },
    map: map,
    title: '台灣觀光局'
})

