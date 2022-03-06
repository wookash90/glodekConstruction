var openingPage = document.querySelector('.openingPage');
var ourWorkPage = document.querySelector('.ourWorkPage');
var contactUsPage = document.querySelector('.contactUsPage');
var table = document.getElementById('table');

let grid1 = document.getElementById('grid1');
let grid2 = document.getElementById('grid2');
let grid3 = document.getElementById('grid3');

var contactUsBtn = document.querySelector('.contactUs');
var freeQuoteBtn = document.querySelector('.free-quote');

// Array

let images = ["./img/gallery/brick.JPG", "./img/gallery/rendering.JPG", "./img/gallery/tiles.JPG", "./img/gallery/boiler.jpeg", "./img/gallery/electrics.jpeg", "./img/gallery/painting.jpeg", "./img/gallery/plaster.jpeg", "./img/gallery/roofworks.jpeg" ];

// Toggle Page

openingPage.hidden = false;
ourWorkPage.hidden = true;
contactUsPage.hidden = true;

function toggleOpeningPage() {
    openingPage.hidden = false;
    ourWorkPage.hidden = true;
    contactUsPage.hidden = true;
    clearInterval(timer);
}

function toggleOurWorkPage() {
    openingPage.hidden = true;
    ourWorkPage.hidden = false;
    contactUsPage.hidden = true;
    clearInterval(timer);
}

function toggleContactUsPage() {
    openingPage.hidden = true;
    ourWorkPage.hidden = true;
    contactUsPage.hidden = false;
    timer = setInterval(choosePic, 5000);
}

//toggling pictures in contactUs page

function choosePic() {
    var randomNum = Math.floor(Math.random() * images.length);
    document.getElementById("grid1").src = images[randomNum];
    var randomNum = Math.floor(Math.random() * images.length);
    document.getElementById("grid2").src = images[randomNum];
    var randomNum = Math.floor(Math.random() * images.length);
    document.getElementById("grid3").src = images[randomNum];

    if(grid3.src === grid2.src) {
        var randomNum = Math.floor(Math.random() * images.length);
        document.getElementById("grid3").src = images[randomNum];
    } else if (grid2.src === grid1.src) {
        var randomNum = Math.floor(Math.random() * images.length);
        document.getElementById("grid2").src = images[randomNum];
    } else if (grid1.src === grid3.src) {
        var randomNum = Math.floor(Math.random() * images.length);
        document.getElementById("grid1").src = images[randomNum];
    }
}

// Event listener
contactUsBtn.addEventListener('click', choosePic);
freeQuoteBtn.addEventListener('click', choosePic);
