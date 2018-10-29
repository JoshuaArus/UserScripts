// ==UserScript==
// @name         LeboncoinCleaner
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       Jobo
// @include      https://www.leboncoin.fr/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var elements = document.getElementsByClassName("apn-na");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
    elements = document.getElementsByClassName("apn-mb");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
    elements = document.getElementsByClassName("sidebar");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
    elements = document.getElementsByClassName("teal-apn");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
})();