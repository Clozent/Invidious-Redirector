// ==UserScript==
// @name         Invidious Redirector
// @namespace    https://github.com/ndvarn/
// @version      0.1
// @updateURL    https://github.com/ndvarn/Invidious-Redirector/raw/main/Invidious Redirector.user.js
// @downloadURL  https://github.com/ndvarn/Invidious-Redirector/raw/main/Invidious Redirector.user.js
// @description  Redirects YouTube to an invidious instance.
// @author       You
// @match        http://youtu.be/*
// @match        https://youtu.be/*
// @match        http://youtube.com/*
// @match        https://youtube.com/*
// @match        http://www.youtube.com/*
// @match        https://www.youtube.com/*
// @match        http://m.youtube.com/*
// @match        https://m.youtube.com/*
// @match        https://music.youtube.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // The Invidious instance URL
    const invidiousURL = "yewtu.be";

    const currentURL = location.href;

    const path = location.pathname;

    if (Document.referrer != invidiousURL || Document.referrer != currentURL) {
        const url = "https://" + invidiousURL + path;
        console.log("Redirecting to " + url + "...");
        location.replace(url);
    }
})();