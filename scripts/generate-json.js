// Vendor imports
const fs = require("fs");
const generators = require("../lib/generators");

// Main function:
const main = async () => {
  console.log("Generating...");

  return fs.writeFileSync(
    `${__dirname}/../assets/json/generated-screensavers.json`,
    JSON.stringify(generators),
    "utf8"
  );
};

main();
