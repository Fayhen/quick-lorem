#! /usr/bin/env node

const { argv } = require("./arguments")
const { LoremIpsum } = require("./lorem")

function main () {
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
    result =  LoremIpsum.loremByCharNumber(Number(charLimit), !!spaced)
  }
  
  if (wordLimit) {
    result = LoremIpsum.loremByWordCount(Number(wordLimit), !!spaced)
  }
  
  if (paragraphLimit) {
    result =  LoremIpsum.loremByParagraphCount(Number(paragraphLimit))
  }

  if (!!lowercase) {
    result = LoremIpsum.applyLowerCase(result)
  }

  if (!!capitalize) {
    result = LoremIpsum.applyCapitalization(result)
  }

  if (!!randomcase) {
    result = LoremIpsum.applyRadomCase(result)
  }

  if (!!uppercase) {
    result = LoremIpsum.applyUpperCase(result)
  }
  
  console.log(result, "\n")
}

main()

process.exit(0)