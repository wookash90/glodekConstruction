var openingPage = document.querySelector('.openingPage');
var ourWorkPage = document.querySelector('.ourWorkPage');
var contactUsPage = document.querySelector('.contactUsPage');

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

