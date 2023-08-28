const fs = require("fs");
const beautify = require("js-beautify/js").js;
const jsString = require("./src/browserScript");

const styleString = fs.readFileSync(
  "./src/browserStyles.css",
  "utf-8",
  (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    return data;
  }
);

const formattedScript = beautify(jsString(styleString), {
  indent_size: 2,
  jslint_happy: true,
  end_with_newline: true,
});

fs.writeFile("./public/browserScript.js", formattedScript, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`userScript updated!`);
});
