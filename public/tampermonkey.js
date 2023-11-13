// ==UserScript==
// @name         URI identity & styling
// @namespace    https://frankindev.com/
// @version      0.0.15
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

  GM_addStyle(`
body[domainuri="www.baidu.com"] #wrapper,body[domainuri="www.baidu.com"] .c-wrapper,body[domainuri="www.baidu.com"] body,body[domainuri="www.baidu.com"] button,body[domainuri="www.baidu.com"] input,body[domainuri="www.baidu.com"] select,body[domainuri="www.baidu.com"] textarea,body[domainuri="www.baidu.com"] .c-font-normal,body[domainuri="www.baidu.com"] .c-font-medium,body[domainuri="www.baidu.com"] .c-font-middle,body[domainuri="www.baidu.com"] .c-font-big,body[domainuri="www.baidu.com"] .new-pmd .c-title,body[domainuri="www.baidu.com"] #container.sam_newgrid,body[domainuri="www.baidu.com"] span[class^=_paragraph],body[domainuri="www.baidu.com"] span[class^=hint],body[domainuri="www.baidu.com"] div[class^=c_font],body[domainuri="www.baidu.com"] div[class^=op_dict],body[domainuri="www.baidu.com"] div[class^=card_layout],body[domainuri="www.baidu.com"] #page,body[domainuri="www.baidu.com"] #container.sam_newgrid td,body[domainuri="www.baidu.com"] #container.sam_newgrid th,body[domainuri="www.baidu.com"] #container.sam_newgrid .c-showurl,body[domainuri="www.baidu.com"] .new-pmd .cr-title,body[domainuri="www.baidu.com"] .wrapper_new #u .s-top-username{font-family:"Crimson Pro","Noto Serif SC","Source Han Serif SC","Microsoft YaHei UI",serif !important}body[domainuri="www.baidu.com"] .c-index-single{font-family:"Oswald","Noto Serif SC","Source Han Serif SC","Microsoft YaHei UI",serif !important}body[domainuri="www.baidu.com"] .s-ctner-menus .s-menu-item{font:14px/24px "Google Sans","Lato","Noto Serif SC","Source Han Serif SC","Microsoft YaHei UI",sans-serif}body[domainuri="news.baidu.com"] body,body[domainuri="news.baidu.com"] #usrbar,body[domainuri="news.baidu.com"] #header-link-wrapper li a,body[domainuri="news.baidu.com"] #header-link-wrapper li span,body[domainuri="news.baidu.com"] .hotnews li:first-child strong a:link,body[domainuri="news.baidu.com"] .hotnews li:first-child strong a:active,body[domainuri="news.baidu.com"] .hotnews li:first-child strong a:visited,body[domainuri="news.baidu.com"] .hotnews li strong a:link,body[domainuri="news.baidu.com"] .hotnews li strong a:active,body[domainuri="news.baidu.com"] .hotnews li strong a:visited,body[domainuri="news.baidu.com"] .ulist .bold-item a,body[domainuri="news.baidu.com"] .mod-tab-content .mod-tab-pane,body[domainuri="news.baidu.com"] .mod-baijia .baijia-focus-list .bdlist,body[domainuri="news.baidu.com"] .col-mod .focuslistnews .bold-item,body[domainuri="news.baidu.com"] .l-right-col .ulist li,body[domainuri="news.baidu.com"] .focuslistnews li{font-family:"Crimson Pro","Noto Serif SC","Source Han Serif SC","Microsoft YaHei UI",serif !important}body[domainuri="news.baidu.com"] .mod-headline-tab{font-family:"Google Sans","Lato","Noto Serif SC","Source Han Serif SC","Microsoft YaHei UI",sans-serif !important}body[domainuri="www.google.co.uk"] body,body[domainuri="www.google.co.uk"] input,body[domainuri="www.google.co.uk"] button,body[domainuri="www.google.co.uk"] div,body[domainuri="www.google.co.uk"] .gb_yd,body[domainuri="www.google.co.uk"] .gb_Ed,body[domainuri="www.google.co.uk"] input[value="Google Search"],body[domainuri="www.google.co.uk"] input[type=submit],body[domainuri="www.google.co.uk"] textarea[title=Search],body[domainuri="www.google.co.uk"] textarea[aria-label=Search],body[domainuri="www.google.co.uk"] a.fl,body[domainuri="www.google.co.uk"] .vmod span,body[domainuri="www.google.cm"] body,body[domainuri="www.google.cm"] input,body[domainuri="www.google.cm"] button,body[domainuri="www.google.cm"] div,body[domainuri="www.google.cm"] .gb_yd,body[domainuri="www.google.cm"] .gb_Ed,body[domainuri="www.google.cm"] input[value="Google Search"],body[domainuri="www.google.cm"] input[type=submit],body[domainuri="www.google.cm"] textarea[title=Search],body[domainuri="www.google.cm"] textarea[aria-label=Search],body[domainuri="www.google.cm"] a.fl,body[domainuri="www.google.cm"] .vmod span{font-family:"Crimson Pro","Noto Serif SC","Source Han Serif SC","Microsoft YaHei UI",serif !important}body[domainuri="www.google.co.uk"] #search h3,body[domainuri="www.google.co.uk"] div[role=presentation] span,body[domainuri="www.google.co.uk"] div[role=complementary] h3,body[domainuri="www.google.co.uk"] #footcnt span,body[domainuri="www.google.cm"] #search h3,body[domainuri="www.google.cm"] div[role=presentation] span,body[domainuri="www.google.cm"] div[role=complementary] h3,body[domainuri="www.google.cm"] #footcnt span{font-family:"Google Sans","Lato","Noto Serif SC","Source Han Serif SC","Microsoft YaHei UI",sans-serif !important}body[domainuri="localhost:8888"] body{font-family:"Crimson Pro","Noto Serif SC","Source Han Serif SC","Microsoft YaHei UI",serif !important}body[domainuri="localhost:8888"] button{font-family:"Google Sans","Lato","Noto Serif SC","Source Han Serif SC","Microsoft YaHei UI",sans-serif !important}body[domainuri="localhost:8888"] pre,body[domainuri="localhost:8888"] code,body[domainuri="localhost:8888"] .prompt{font-family:"IBM Plex Mono",monospace !important}
`);
})();
