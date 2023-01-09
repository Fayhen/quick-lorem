const yargs = require("yargs/yargs")
const { hideBin } = require("yargs/helpers")

const argv = yargs(hideBin(process.argv))
    .usage("Usage: $0 [options]")
    .option("chars", {
      describe: "Generate a lorem ipsum string with a set number of characters. Allows up to 75000 characters.",
      type: "number"
    })
    .option("words", {
      describe: "Generate a lorem ipsum string with a set number of words. Allows up to 10000 words. Takes precedence over the number of characters.",
      type: "number"
    })
    .option("paragraphs", {
      describe: "Generate a lorem ipsum string with a given number of paragraphs. Allows up to 150 paragraphs. Takes precedence over the number of characters or words.",
      type: "number"
    })
    .option("spaced", {
      describe: "Add newlines between paragraphs. Always activated if using with the paragraphs option.",
      type: "boolean"
    })
    .option("lowercase", {
      describe: "Covert output to lowercase.",
      type: "boolean"
    })
    .option("capitalize", {
      describe: "Capitalize each word on the output. Takes precedence over lowercase.",
      type: "boolean"
    })
    .option("randomcase", {
      describe: "Covert output to random case Takes precedence over lowercase and capitalize.",
      type: "boolean"
    })
    .option("uppercase", {
      describe: "Covert output to uppercase. Takes precedence over other letter cases.",
      type: "boolean"
    })
    .option("help", {
      describe: "Show this help message.",
    })
    .option("version", {
      describe: "Show current version."
    })
    .example("$0", "Outputs the default lorem ipsum string.")
    .example("$0 --chars 100", "Outputs a lorem ipsum string with 100 characters.")
    .example("$0 --words 100", "Outputs a lorem ipsum string with 100 words.")
    .example("$0 --chars 100", "Outputs a lorem ipsum string with 100 paragraphs.")
    .example("$0 --lowercase", "Outputs the default lorem ipsum string in lowercase.")
    .example("$0 --uppercase", "Outputs the default lorem ipsum string in uppercase.")
    .example("$0 --randomcase", "Outputs the default lorem ipsum string in random case.")
    .example("$0 --uppercase", "Outputs the default lorem ipsum string with each word capitalized.")
    .example("$0 --chars 1000 --spaced", "Outputs a lorem ipsum string with 1000 words and spaces between characters.")
    .argv

module.exports = { argv }
