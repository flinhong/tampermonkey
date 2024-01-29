// ==UserScript==
// @name         URI identity & styling
// @namespace    scripts.frankindev.com
// @version      0.0.18
// @description  try to take over the world with styles...
// @author       Frank Lin
// @match        http*://www.baidu.com/*
// @match        http*://news.baidu.com/*
// @match        http*://mbd.baidu.com/*
// @match        http*://baijiahao.baidu.com/*
// @match        http*://www.google.co.uk/*
// @match        http*://www.google.com/*
// @match        http*://www.zhihu.com/*
// @match        http*://www.smzdm.com/*
// @match        http*://post.smzdm.com/*
// @match        http*://localhost:8888/*
// @icon         https://cdn.honglin.ac.cn/favicon.ico
// @updateURL    https://cdn.honglin.ac.cn/statically/gh/flinhong/tampermonkey/main/public/userscript.js"
// @grant        GM_addStyle
// ==/UserScript==

(function () {
  "use strict";

  // Your code here...
  // add 'domainuri' attribute for css selector
  document.body.setAttribute("domainuri", window.location.hostname);

  const styles = [
    'https://cdn.honglin.ac.cn/fonts/g/css?family=Crimson+Pro:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Lato:ital@0;1&family=Noto+Serif+SC:wght@300;400;500&family=Oswald:wght@300&family=IBM+Plex+Mono:ital@0;1&display=swap',
    'https://cdn.honglin.ac.cn/statically/gh/flinhong/tampermonkey/main/public/styles.min.css'
  ]

  styles.forEach((href) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = href;
    document.getElementsByTagName('HEAD')[0].appendChild(link);
  })
})();
