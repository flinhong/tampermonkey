// ==UserScript==
// @name         URI identity & styling
// @namespace    https://frankindev.com/
// @version      0.0.8
// @description  try to take over the world with styles...
// @author       Frank Lin
// @match        *://*/*
// @icon         https://cdn.with.rr.nu/favicon.ico
// @resource     font_Sans https://fonts.upset.dev/css2?family=Google+Sans:ital@0;1&display=swap
// @resource     font_Noto https://cdn.honglin.ac.cn/fonts/g/css?family=Noto+Serif+SC:wght@300;400;500&display=swap
// @resource     font_Crimson https://cdn.honglin.ac.cn/fonts/g/css?family=Crimson+Text:ital@0;1&display=swap
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

  GM_addStyle(`
body[domainuri="www.baidu.com"] #wrapper,body[domainuri="www.baidu.com"] body,body[domainuri="www.baidu.com"] button,body[domainuri="www.baidu.com"] input,body[domainuri="www.baidu.com"] select,body[domainuri="www.baidu.com"] textarea,body[domainuri="www.baidu.com"] .c-font-normal,body[domainuri="www.baidu.com"] .c-font-medium,body[domainuri="www.baidu.com"] .new-pmd .c-title,body[domainuri="www.baidu.com"] #container.sam_newgrid,body[domainuri="www.baidu.com"] span[class^=_paragraph],body[domainuri="www.baidu.com"] span[class^=hint],body[domainuri="www.baidu.com"] div[class^=c_font],body[domainuri="www.baidu.com"] div[class^=op_dict],body[domainuri="www.baidu.com"] #page,body[domainuri="www.baidu.com"] #container.sam_newgrid td,body[domainuri="www.baidu.com"] #container.sam_newgrid th,body[domainuri="www.baidu.com"] #container.sam_newgrid .c-showurl,body[domainuri="www.baidu.com"] .new-pmd .cr-title{font-family:"Crimson Text","Noto Serif SC","Source Han Serif SC","Microsoft YaHei UI",serif !important}body[domainuri="www.baidu.com"] .c-index-single{font-family:"Google Sans","Noto Serif SC","Source Han Serif SC","Microsoft YaHei UI",sans-serif}body[domainuri="www.google.co.uk"] body,body[domainuri="www.google.co.uk"] input,body[domainuri="www.google.co.uk"] button,body[domainuri="www.google.co.uk"] div,body[domainuri="www.google.co.uk"] .gb_yd,body[domainuri="www.google.co.uk"] .gb_Ed,body[domainuri="www.google.co.uk"] input[value="Google Search"],body[domainuri="www.google.co.uk"] input[type=submit],body[domainuri="www.google.co.uk"] textarea[title=Search],body[domainuri="www.google.co.uk"] textarea[aria-label=Search],body[domainuri="www.google.co.uk"] a.fl,body[domainuri="www.google.co.uk"] .vmod span,body[domainuri="www.google.cm"] body,body[domainuri="www.google.cm"] input,body[domainuri="www.google.cm"] button,body[domainuri="www.google.cm"] div,body[domainuri="www.google.cm"] .gb_yd,body[domainuri="www.google.cm"] .gb_Ed,body[domainuri="www.google.cm"] input[value="Google Search"],body[domainuri="www.google.cm"] input[type=submit],body[domainuri="www.google.cm"] textarea[title=Search],body[domainuri="www.google.cm"] textarea[aria-label=Search],body[domainuri="www.google.cm"] a.fl,body[domainuri="www.google.cm"] .vmod span{font-family:"Crimson Text","Noto Serif SC","Source Han Serif SC","Microsoft YaHei UI",serif}body[domainuri="www.google.co.uk"] #search h3,body[domainuri="www.google.co.uk"] div[role=presentation] span,body[domainuri="www.google.co.uk"] div[role=complementary] h3,body[domainuri="www.google.co.uk"] #footcnt span,body[domainuri="www.google.cm"] #search h3,body[domainuri="www.google.cm"] div[role=presentation] span,body[domainuri="www.google.cm"] div[role=complementary] h3,body[domainuri="www.google.cm"] #footcnt span{font-family:"Google Sans","Noto Serif SC","Source Han Serif SC","Microsoft YaHei UI",sans-serif}
`);
})();
