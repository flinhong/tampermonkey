// ==UserScript==
// @name         URI identity & styling
// @namespace    https://frankindev.com/
// @version      0.0.2
// @description  try to take over the world with styles...
// @author       Frank Lin
// @match        *://*/*
// @icon         https://cdn.honglin.ac.cn/favicon.ico
// @updateURL    https://cdn.with.rr.nu/statically/gh/flinhong/tampermonkey/main/public/userscript.js
// @grant        GM_addStyle
// ==/UserScript==

(function () {
  "use strict";

  // Your code here...
  // add 'domainuri' attribute for css selector
  document.body.setAttribute("domainuri", window.location.hostname);

  // Google Fonts
  document.head.append('<link rel="stylesheet" href="https://fonts.loli.net/css2?family=Google+Sans:ital@0;1&display=swap">');
  document.head.append('<link rel="stylesheet" href="https://cdn.honglin.ac.cn/fonts/g/css?family=Crimson+Text:ital@0;1&display=swap">');
  document.head.append('<link rel="stylesheet" href="https://cdn.honglin.ac.cn/fonts/g/css?family=Noto+Serif+SC:wght@300;400;500&display=swap">');

  document.head.append('<link rel="stylesheet" href="https://cdn.with.rr.nu/statically/gh/flinhong/tampermonkey/main/public/styles.min.css">');
})();
