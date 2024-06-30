// ==UserScript==
// @name         URI identity & styling
// @namespace    scripts.frankindev.com
// @version      0.0.21
// @description  try to take over the world with styles...
// @author       Frank Lin
// @match        *://*.baidu.com/*
// @match        *://www.google.co.uk/*
// @match        *://www.google.com/*
// @match        *://www.zhihu.com/*
// @match        *://*.smzdm.com/*
// @match        *://localhost:8888/*
// @icon         https://cdn.honglin.ac.cn/favicon.ico
// @resource     font_Google https://cdn.honglin.ac.cn/fonts/g/css?family=Crimson+Pro:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Lato:ital@0;1&family=Noto+Serif+SC:wght@300;400;500&family=Oswald:wght@300&family=IBM+Plex+Mono:ital@0;1&display=swap
// @resource     style_Fonts https://cdn.honglin.ac.cn/statically/gh/flinhong/tampermonkey/main/public/styles.min.css
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==

(function () {
  "use strict";

  // Your code here...
  // add 'domainuri' attribute for css selector
  document.body.setAttribute("domainuri", window.location.hostname);

  // Google fonts
  const googleFont = GM_getResourceText("font_Google");
  GM_addStyle(googleFont);

  // Custom styles
  const styleFont = GM_getResourceText("style_Fonts");
  GM_addStyle(styleFont);

})();
