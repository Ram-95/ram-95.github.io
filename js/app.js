function myFunction() {
    var element = document.body;
    var pageHeader = document.querySelector('.page-header');
    var sectionLabel = document.getElementsByClassName('section-label');
    var headerLabel = document.getElementsByClassName('header-label');
    element.classList.toggle("dark-mode");
    pageHeader.classList.toggle("dark-mode");
    sectionLabel.classList.toggle("dark-mode-labels");
    headerLabel.classList.toggle("dark-mode-labels");
 }