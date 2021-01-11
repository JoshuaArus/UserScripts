// ==UserScript==
// @name         LeBonCoin Maps Enhancer
// @namespace    http://joshuaarus.fr/
// @version      1.0
// @description  Add google maps Iframe in search view
// @author       Joshua Arus
// @match        https://www.leboncoin.fr/recherche?*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var ENTRY_CLASS_PATTERN = /styles_adListItem.*/g;
    var LOC_PATTERN = /([a-zA-Z].*) ([0-9]{5})/g;
    var DEFAULT_HEIGHT = "250";

    var createIframe = function(loc, width, height) {
        var src = "https://maps.google.com/maps?q=" + loc.replace(" ", "%20") + "&t=&z=9&ie=UTF8&iwloc=&output=embed";
        var iframe = document.createElement("iframe");
        iframe.style.borderTop ="solid 1px";
        iframe.style.borderBottom ="solid 1px";
        iframe.setAttribute("width", width);
        iframe.setAttribute("height", DEFAULT_HEIGHT);
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("scrolling", "no");
        iframe.setAttribute("marginheight", "0");
        iframe.setAttribute("marginwidth", "0");
        iframe.setAttribute("src", src);

        return iframe;
    }

    var allElements = document.querySelectorAll('*');
    var matchingEntryClass = [];

    for (var i = 0; i < allElements.length; i++) {
        var classes = allElements[i].className.toString().split(/\s+/);
        for (var j = 0; j < classes.length; j++) {
            var cls = classes[j];
            if (cls && matchingEntryClass.indexOf(cls) === -1 && cls.match(ENTRY_CLASS_PATTERN)) {
                matchingEntryClass.push(cls);
            }
        }
    }

    for (i = 0; i < matchingEntryClass.length; i++) {
        var listItems = document.getElementsByClassName(matchingEntryClass[i]);
        for (j = 0; j < listItems.length; j++) {
            var item = listItems[j];

            var nestedDivs = item.querySelectorAll("div");
            var loc = "";
            for (var k = 0; k < nestedDivs.length; k++) {
                if (nestedDivs[k].innerText.match(LOC_PATTERN)) {
                    loc = nestedDivs[k].innerText;
                }
            }
            if (loc != "") {
                var fc = item.firstChild;
                fc.appendChild(createIframe(loc, item.scrollWidth, item.scrollHeight));
            }
        }
    }
})();
