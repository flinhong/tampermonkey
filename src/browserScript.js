const jsString = (styleString) => `
// ==UserScript==
// @name         URI identity & styling
// @namespace    https://frankindev.com/
// @version      0.1
// @description  try to take over the world with styles...
// @author       Frank Lin
// @match        *://*/*
// @icon         https://cdn.with.rr.nu/favicon.ico
// @resource     font_Sans https://fonts.font.im/css?family=Google+Sans:400,400i&display=swap
// @resource     font_Noto https://fonts.font.im/css?family=Noto+Serif+SC:400&display=swap
// @resource     font_Crimson https://fonts.font.im/css?family=Crimson+Pro:400,400i&display=swap
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
  const crimsonFont = GM_getResourceText("font_Crimson");
  GM_addStyle(crimsonFont);

  GM_addStyle(\`\n${styleString}\`);
})();

// @updated      ${new Date(Date.now()).toUTCString()}
`;

module.exports = jsString;
