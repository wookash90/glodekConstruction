var openingPage = document.querySelector('.openingPage');
var ourWorkPage = document.querySelector('.ourWorkPage');
var contactUsPage = document.querySelector('.contactUsPage');

var grid1 = document.getElementById('grid1');
var grid2 = document.getElementById('grid2');
var grid3 = document.getElementById('grid3');

// Array

var images = ["./img/gallery/brick.JPG", "./img/gallery/rendering.JPG", "./img/gallery/tiles.JPG", "./img/gallery/boiler.jpeg", "./img/gallery/electrics.jpeg", "./img/gallery/painting.jpeg", "./img/gallery/plaster.jpeg", "./img/gallery/roofworks.jpeg" ];

function choosePic() {
    var randomNum = Math.floor(Math.random() * images.length);
    document.getElementById("grid1").src = images[randomNum];
    var randomNum = Math.floor(Math.random() * images.length);
    document.getElementById("grid2").src = images[randomNum];
    var randomNum = Math.floor(Math.random() * images.length);
    document.getElementById("grid3").src = images[randomNum];
}


// Toggle Page

openingPage.hidden = false;
ourWorkPage.hidden = true;
contactUsPage.hidden = true;

function toggleOpeningPage() {
    openingPage.hidden = false;
    ourWorkPage.hidden = true;
    contactUsPage.hidden = true;
}

function toggleOurWorkPage() {
    openingPage.hidden = true;
    ourWorkPage.hidden = false;
    contactUsPage.hidden = true;
}

function toggleContactUsPage() {
    openingPage.hidden = true;
    ourWorkPage.hidden = true;
    contactUsPage.hidden = false;
}

// On Load
choosePic();