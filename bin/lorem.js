const { defaultString, paragraphs} = require("./paragraphs")

/**
 * Lorem Ipsum class with string operations.
 */
class LoremIpsum {
  /**
   * Capitalizes each work of a given string.
   * 
   * @param {string} text String to apply word capitalization.
   * @returns {string} Capitalized string.
   */
  static applyCapitalization (text) {
    const paragraphs = text.split("\n\n")

    const capitalizedParagraphs = paragraphs.map((paragraph) => {
      const words = paragraph.split(" ").map((word) => {
        return word.charAt(0).toUpperCase() + word.substring(1)
      })
      return words.join(" ")
    })

    return capitalizedParagraphs.join("\n\n")
  }

  /**
   * Converts a string to lowercase.
   *
   * @param {string} text String to be lowercased.
   * @returns {string} Lowercase string.
   */
  static applyLowerCase (text) {
    return text.toLowerCase()
  }

  /**
   * Converts a string to uppercase.
   *
   * @param {string} text String to be uppercase.
   * @returns {string} Uppercase string.
   */
  static applyUpperCase (text) {
    return text.toUpperCase()
  }

  /**
   * Converts a string to random case.
   *
   * @param {string} text
   * @returns {string} Random case string.
   */
  static applyRadomCase (text) {
    return text.split("").map(
      (char) => {
        return Math.round(Math.random()) ? char.toUpperCase() : char.toLowerCase()
      }
    ).join("")
  }

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
    let lorem = ""

    for (let i = 0; i < paragraphCount && i < paragraphs.length; i++) {
      if (i >= paragraphCount || i >= paragraphs.length) {
        lorem = lorem + paragraphs[i]
        break
      }
      lorem = lorem + paragraphs[i] + "\n\n"
    }

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

