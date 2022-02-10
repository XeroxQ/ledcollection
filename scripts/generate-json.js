// Vendor imports
const fs = require("fs");
const generators = require("../lib/generators");
const appJson = require("../app.json");

// Main function:
const main = async () => {
  console.log("Generating...");

  const sortedGenerators = generators.sort((a, b) => a.id - b.id);
  const screenSavers = appJson.screensavers.sort((a, b) => a.id - b.id);
  let matchedGenerators = [];

  for (let i = 0; i < sortedGenerators.length; i++) {
    matchedGenerators.push({
      ...sortedGenerators[i],
      ...screenSavers.find(
        (itmInner) => itmInner.name === sortedGenerators[i].id
      )});
  }

  console.log("Generating Done!");

  return fs.writeFileSync(
    `${__dirname}/../assets/json/generated-screensavers.json`,
    JSON.stringify(matchedGenerators),
    "utf8"
  );
};

main();
