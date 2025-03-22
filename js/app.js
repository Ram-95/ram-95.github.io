function myFunction() {
    var element = document.body;
    var pageHeader = document.querySelector('.page-header');
    var pageFooter = document.querySelector('.page-footer');
    var sectionLabels = document.getElementsByClassName('section-label');
    var headerLabels = document.getElementsByClassName('header-label');
    var toggleButton = document.querySelector('.toggle-button');
    element.classList.toggle("dark-mode");
    pageHeader.classList.toggle("dark-mode");
    pageFooter.classList.toggle("dark-mode");

    for (var i = 0; i < sectionLabels.length; i++) {
        sectionLabels[i].classList.toggle("dark-mode-labels");
    }

    for (var i = 0; i < headerLabels.length; i++) {
        headerLabels[i].classList.toggle("dark-mode-labels");
    }
}