const { defaultString, paragraphs} = require("./paragraphs")

/**
 * Lorem Ipsum class with string operations.
 */
class LoremIpsum {
  /**
   * Returns a lorem ipsum string up to a certain character length. Number
   * of characters is capped at a 75000 maximum.
   *
   * Accepts an `useNewlines` flag to include newlines between paragraphs.
   * These will sum up to the total string length.
   *
   * @param {string} charNumber Character limit.
   * @param {boolean} useNewlines True if paragraphs should be spaced.
   * @return {string} A lorem ipsum string.
   */
  static loremByCharNumber (charNumber, useNewlines = false) {
    const MAX = 75000
    const separator = useNewlines ? "\n\n" : " "
    const separatorLength = separator.length
  
    const start = paragraphs[0].substring(0, charNumber)
    paragraphs.shift()

    const lorem = paragraphs.reduce((acc, paragraph) => {
      const currentLength = acc.length
      const nextParagraphLength = paragraph.length + separatorLength
      const remainingLength = charNumber < MAX
        ? (charNumber - currentLength)
        : (MAX - currentLength)

      if (remainingLength < 1) {
        return acc
      }

      if (nextParagraphLength <= remainingLength) {
        return acc + separator + paragraph
      }

      const finalSubstring = separator + paragraph.substring(0, remainingLength - separatorLength)
      return acc + finalSubstring
    }, start)

    return lorem
  }

  /**
   * Returns a lorem ipsum string up to a certain word count. Word count
   * is capped at a 10000 maximum.
   *
   * Accepts a `useNewlines` flag to include newlines between paragraphs.
   * These do not count to total word count.
   *
   * @param {number} wordCount
   * @param {boolean} useNewlines True if paragraphs should be spaced.
   * @return {string} A lorem ipsum string.
   */
  static loremByWordCount (wordCount, useNewlines = false) {
    const MAX = 10000
    const separator = useNewlines ? "\n\n" : " "

    const limit = wordCount <= MAX
      ? wordCount
      : MAX
    console.log("working with limit", limit)

    const start = paragraphs[0].trim().split(" ").slice(0, limit).join(" ")
    paragraphs.shift()

    const lorem = paragraphs.reduce((acc, string) => {
      const currentCount = acc.trim().split(/ |\n\n/g).length

      if (currentCount >= limit) {
        return acc
      }

      const remainingCount = limit - currentCount

      const next = acc + separator + string.trim().split(" ")
        .slice(0, remainingCount).join(" ")

      return next
    }, start)

    return lorem
  }

  /**
   * Returns a lorem ipsum string up to a number of paragraphs. Newlines
   * between paragraphs are automatically included.
   *
   * @param {string} paragraphCount Number of paragraphs.
   * @return {string} A lorem ipsum string.
   */
  static loremByParagraphCount (paragraphCount) {
    const lorem = paragraphs.reduce((acc, paragraph, index) => {
      if (index >= paragraphCount) {
        // Remove newlines after final paragraph
        return acc.substring(0, acc.length - 2)
      }

      return acc + paragraph  + "\n\n"
    }, "")

    return lorem
  }

  /**
   * Returns the default lorem ipsum string.
   *
   * @returns {string} Default lorem ipsum string.
   */
  static loremDefault () {
    return defaultString
  }
}

module.exports = { LoremIpsum }

