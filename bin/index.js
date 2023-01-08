#! /usr/bin/env node

const yargs = require("yargs/yargs")
const { hideBin } = require("yargs/helpers")
const { LoremIpsum } = require("./lorem")

function main () {
  const argv = yargs(hideBin(process.argv)).argv

  const charLimit = argv.chars
  const wordLimit = argv.words
  const paragraphLimit = argv.paragraphs

  const lowercase = argv.lowercase
  const capitalize = argv.capitalize
  const randomcase = argv.randomcase
  const uppercase = argv.uppercase
  
  const spaced = argv.spaced

  let result = LoremIpsum.loremDefault()
  
  if (charLimit) {
    console.log('chars', charLimit)
    result =  LoremIpsum.loremByCharNumber(Number(charLimit), !!spaced)
    console.log("result length: ", result.length)
  }
  
  if (wordLimit) {
    console.log('words', wordLimit)
    result = LoremIpsum.loremByWordCount(Number(wordLimit), !!spaced)
    console.log("word length", result.trim().split(/ |\n\n/g).length)
  }
  
  if (paragraphLimit) {
    console.log('paragraphs', paragraphLimit)
    result =  LoremIpsum.loremByParagraphCount(Number(paragraphLimit), !!spaced)
    console.log("paragraph length", result.split("\n\n").length - 1)
  }

  if (lowercase) {
    result = LoremIpsum.applyLowerCase(result)
  }

  if (capitalize) {
    result = LoremIpsum.applyCapitalization(result)
  }

  if (randomcase) {
    result = LoremIpsum.applyRadomCase(result)
  }

  if (uppercase) {
    result = LoremIpsum.applyUpperCase(result)
  }
  
  console.log(result, "\n")
}

main()

process.exit(0)