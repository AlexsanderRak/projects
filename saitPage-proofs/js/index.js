"use strict";
function toggl() {
    document.querySelector(".burgerMenu").classList.toggle("burgerMenu_active");
};
document.querySelector(".burger").addEventListener("click", toggl);

function search() {
    let size = window.screen.availWidth;
    if(size<=436){
        document.querySelector(".searchMobail").classList.toggle("searchMobail_activ");
    }
}
document.querySelector("#search").addEventListener("click", search);

function filter() {

    let overlay = document.querySelector(".overlay");
    if(overlay.style.display === 'none'){
        overlay.style.display = 'block';
    }else{
        overlay.style.display = 'none';
    }

    
};
document.querySelector(".filterSvg").addEventListener("click", filter);
document.querySelector("#apply").addEventListener("click", filter);