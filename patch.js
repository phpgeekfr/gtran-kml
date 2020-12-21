const fs = require("fs");
const f = "node_modules/@maphubs/tokml/index.js";

fs.readFile(f, "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(
    "return tag('ExtendedData'",
    "delete _.name;delete _.desc;return tag('ExtendedData'"
  );

  fs.writeFile(f, result, "utf8", function (err) {
    if (err) return console.log(err);
  });
});
