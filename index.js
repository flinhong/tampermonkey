const fs = require("fs");
const beautify = require("js-beautify/js").js;
const AutoVersion = require("auto-version-js");
const jsString = require("./src/browserScript");

const formattedScript = (browser) =>
  beautify(jsString(AutoVersion.getVersion(), browser), {
    indent_size: 2,
    jslint_happy: true,
    end_with_newline: true,
  });

fs.writeFile("./public/tampermonkey.js", formattedScript(), (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`tampermonkey script updated!`);
});

fs.writeFile("./public/userscript.js", formattedScript("safari"), (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`userscript updated!`);
});
