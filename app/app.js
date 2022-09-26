import * as MODEL from './model.js'

function route() { 
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    console.log(pageID);

    if (pageID == "") {
        MODEL.changePage("home");
    } else {
        // if(pageID == pageID) {
        MODEL.changePage(pageID);
        // }
        // MODEL.changePage(pageID, subPageID);
    }
}

function initApp() {
    $(window).on("hashchange", route);
    route();
}

$(document).ready(function() {
    initApp();
});