const userscriptString = (version) => `
// ==UserScript==
// @name         URI identity & styling
// @namespace    https://frankindev.com/
// @version      ${version}
// @description  try to take over the world with styles...
// @author       Frank Lin
// @match        *://*/*
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
    'https://fonts.upset.dev/css2?family=Google+Sans:ital@0;1&display=swap',
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
`;

const tampermonkeyString = (styleString, version) => `
// ==UserScript==
// @name         URI identity & styling
// @namespace    https://frankindev.com/
// @version      ${version}
// @description  try to take over the world with styles...
// @author       Frank Lin
// @match        *://*/*
// @icon         https://cdn.honglin.ac.cn/favicon.ico
// @resource     font_Sans https://fonts.upset.dev/css2?family=Google+Sans:ital@0;1&display=swap
// @resource     font_Noto https://cdn.honglin.ac.cn/fonts/g/css?family=Crimson+Pro:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Lato:ital@0;1&family=Noto+Serif+SC:wght@300;400;500&family=Oswald:wght@300&family=IBM+Plex+Mono:ital@0;1&display=swap
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==

(function () {
  "use strict";

  // Your code here...
  // add 'domainuri' attribute for css selector
  document.body.setAttribute("domainuri", window.location.hostname);

  // Google fonts
  const sansFont = GM_getResourceText("font_Sans");
  GM_addStyle(sansFont);
  const notoFont = GM_getResourceText("font_Noto");
  GM_addStyle(notoFont);

  GM_addStyle(\`\n${styleString}\`);
})();
`;

module.exports = { userscriptString, tampermonkeyString };
