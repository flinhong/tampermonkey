const sites = require("./siteConfig.json");
const userscriptString = (version) => `
// ==UserScript==
// @name         URI identity & styling
// @namespace    scripts.frankindev.com
// @version      ${version}
// @description  try to take over the world with styles...
// @author       Frank Lin
${sites
    .map((site) => {
        return `// @match        *://${site.domain}/*`;
    })
    .join("\r\n")}
// @icon         https://cdn.honglin.ac.cn/favicon.ico
// @updateURL    https://cdn.honglin.ac.cn/statically/gh/flinhong/tampermonkey/main/public/userscript.js"
// @grant        GM_addStyle
// ==/UserScript==

(function () {
  "use strict";

  // Your code here...
  // add 'data-domain' attribute for css selector
  document.body.setAttribute("data-domain", window.location.hostname);

  const domain = window.location.hostname
    .replace(".com", "")
    .replace(".co.uk", "")
    .replace("www.", "");

  const styles = [
    'https://cdn.honglin.ac.cn/fonts/g/css?family=Crimson+Pro:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Lato:ital@0;1&family=Noto+Serif+SC:wght@300;400;500&family=Oswald:wght@300&family=IBM+Plex+Mono:ital@0;1&display=swap',
    'https://cdn.honglin.ac.cn/statically/gh/flinhong/tampermonkey/main/public/styles/'+domain+'.css'
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

const tampermonkeyString = (version) => `
// ==UserScript==
// @name         URI identity & styling
// @namespace    scripts.frankindev.com
// @version      ${version}
// @description  try to take over the world with styles...
// @author       Frank Lin
${sites
    .map((site) => {
        return `// @match        *://${site.domain}/*\r\n// @resource     css_${site.domain.replace("*.", "").replace(".com", "").replace(".co.uk", "").replace("www.", "")}\thttps://cdn.honglin.ac.cn/statically/gh/flinhong/tampermonkey/main/public/styles/${site.css}`;
    })
    .join("\r\n")}
// @icon         https://cdn.honglin.ac.cn/favicon.ico
// @resource     font_Google https://cdn.honglin.ac.cn/fonts/g/css?family=Crimson+Pro:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Lato:ital@0;1&family=Noto+Serif+SC:wght@300;400;500&family=Oswald:wght@300&family=IBM+Plex+Mono:ital@0;1&display=swap
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==

(function () {
  "use strict";

  // Your code here...
  // add 'data-domain' attribute for css selector
  document.body.setAttribute("data-domain", window.location.hostname);

  // Google fonts
  const googleFont = GM_getResourceText("font_Google");
  GM_addStyle(googleFont);

  // Custom styles
  const domain = window.location.hostname
      .replace(".com", "")
      .replace(".co.uk", "")
      .replace("www.", "");
  const styleFont = GM_getResourceText("css_" + domain);
  GM_addStyle(styleFont); 
})();
`;

module.exports = { userscriptString, tampermonkeyString };
