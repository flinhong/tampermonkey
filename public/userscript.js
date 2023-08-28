// ==UserScript==
// @name         URI identity & styling
// @namespace    https://frankindev.com/
// @version      0.0.5
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

  const styles = [
    'https://fonts.loli.net/css2?family=Google+Sans:ital@0;1&display=swap',
    'https://cdn.honglin.ac.cn/fonts/g/css?family=Crimson+Text:ital@0;1&display=swap',
    'https://cdn.honglin.ac.cn/fonts/g/css?family=Noto+Serif+SC:wght@300;400;500&display=swap',
    'https://cdn.with.rr.nu/statically/gh/flinhong/tampermonkey/main/public/styles.min.css'
  ]

  styles.forEach((href) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = href;
    document.getElementsByTagName('HEAD')[0].appendChild(link);
  })
})();
