// ==UserScript==
// @name         YggAutoPublishDateSort
// @namespace    http://joshuaarus.fr
// @version      1.0
// @author       Jobo
// @include      *yggtorrent*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var forms = document.getElementsByTagName("form");
    for(var i = 0; i < forms.length; i++){
        var form = forms[i];
        if (form.action.endsWith("/search")) {
            var input = document.createElement("input");
            input.type="text";
            input.name="sort";
            input.classList.add("sortInput");
            input.style.visibility="hidden";
            form.firstElementChild.appendChild(input);
        }
    }

    var inputs = document.getElementsByClassName("sortInput");
    for(var j = 0; j < inputs.length; j++){
        var inp = inputs[j];
        inp.value="publish_date";
    }
})();
