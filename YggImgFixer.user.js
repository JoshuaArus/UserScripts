// ==UserScript==
// @name         YggImgFixer
// @namespace    http://joshuaarus.fr
// @version      1.0
// @author       Jobo
// @include      *yggtorrent*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var REGEX = /https:\/\/images\.weserv\.nl\/\?url=(.*)/g;

    var imgs = document.getElementsByTagName("img");
    for(var i = 0; i < imgs.length; i++){
        var img = imgs[i];
        if (img.src.match(REGEX)) {
            img.setAttribute("src", REGEX.exec(img.src)[1]);
        }
    }
})();
