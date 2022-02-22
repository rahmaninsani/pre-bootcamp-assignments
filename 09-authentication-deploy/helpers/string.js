function capitalizeEachWord(sentence) {
  let words = sentence.split(" ");

  const result = words
    .map((word) => {
      return word.charAt(0).toUpperCase().concat(word.substring(1));
    })
    .join(" ");

  return result;
}

module.exports = capitalizeEachWord;
