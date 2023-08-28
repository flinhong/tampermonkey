const fs = require("fs");
const beautify = require("js-beautify/js").js;
const AutoVersion = require("auto-version-js");
const { userscriptString, tampermonkeyString } = require("./src/browserScript");

const version = AutoVersion.getVersion();

const formattedUserscript = (version) =>
  beautify(userscriptString(version), {
    indent_size: 2,
    jslint_happy: true,
    end_with_newline: true,
  });

const cssString = fs.readFileSync(
  "./public/styles.min.css",
  "utf-8",
  (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    return data;
  }
);

const formattedTampermonkey = (cssString, version) =>
  beautify(tampermonkeyString(cssString, version), {
    indent_size: 2,
    jslint_happy: true,
    end_with_newline: true,
  });

fs.writeFile(
  "./public/tampermonkey.js",
  formattedTampermonkey(cssString, version),
  (err) => {
    if (err) {
      console.log(err);
    }
    console.log(`tampermonkey script updated!`);
  }
);

fs.writeFile("./public/userscript.js", formattedUserscript(version), (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`userscript updated!`);
});
