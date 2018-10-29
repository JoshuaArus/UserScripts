// ==UserScript==
// @name         PlexPassRemover
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remove the "get premium" button from plex web theater
// @author       Arus Joshua
// @match        https://app.plex.tv/*
// @match        http://127.0.0.1:32400/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setTimeout(function(){
        var navBar = document.getElementsByClassName("nav-bar");
        if (navBar.length > 0) {
            var container = navBar[0].querySelector("div");
            var rightContainer = container.querySelectorAll("div")[1];
            var button = rightContainer.querySelectorAll("button")[0];
            button.style.display = "none";
        }
    }, 2000);
})();