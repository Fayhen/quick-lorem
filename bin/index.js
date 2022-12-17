#! /usr/bin/env node

const yargs = require("yargs/yargs")
const { hideBin } = require("yargs/helpers")
const { LoremIpsum } = require("./lorem")

const argv = yargs(hideBin(process.argv)).argv
console.log(argv)

const charLimit = argv.chars
const wordLimit = argv.words
const paragraphLimit = argv.paragraphs
const spaced = argv.spaced

if (charLimit) {
  console.log('chars', charLimit)
  const result =  LoremIpsum.loremByCharNumber(
    Number(charLimit), !!spaced
  )
  console.log(result)
  console.log(result.length)

  process.exit(0)
}

if (wordLimit) {
  console.log('words', wordLimit)
  const result = LoremIpsum.loremByWordCount(wordLimit, !!spaced)
  console.log(result)
  console.log(result.trim().split(/ |\n\n/g).length)

  process.exit(0)
}

if (paragraphLimit) {
  console.log('paragraphs', paragraphLimit)
  const result =  LoremIpsum.loremByParagraphCount(
    Number(paragraphLimit), !!spaced
  )
  console.log(result)
  console.log(result.split("\n\n").length - 1)

  process.exit(0)
}

process.exit(0)