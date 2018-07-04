import words from './Lyrics/bowie.json';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function randomItem(array) {
  let index = getRandomInt(array.length);
  return array[index];
}

function addCharacters(currentCharacters, lyricsArray) {
  let startPoint = getRandomInt(lyricsArray.length - 1);
  let workingArray = lyricsArray.slice(startPoint);
  let endPoint = getRandomInt((workingArray.length)) + 1;
  let newChars = generateNewCharacters(workingArray, startPoint, endPoint);
  if (newChars.length) {
    newChars = newChars.concat(". ");
  }
  return currentCharacters.concat(newChars)
}

function generateNewCharacters(workingArray, start, end) {
  return workingArray.slice(start, end).join(". ");
}

function cutToNearestWord(textString, charLimit) {
  let safeSlicePos = findSentenceBoundary(charLimit, textString);
  return textString.slice(0, safeSlicePos).concat(".");
}

function findSentenceBoundary(slicePos, string) {
  if (string.charAt(slicePos) === ".") {
    return slicePos
  }
  else {
    return findSentenceBoundary(slicePos-1, string)
  }
}

function generateText(currentText, charLimit, album, usedSongsList) {
  if (currentText.length >= charLimit) {
    let uniqueSongs = arr => [...new Set(arr)];
    let result = {
      songs: uniqueSongs(usedSongsList),
      text: cutToNearestWord(currentText, charLimit)
    }
    return result;
  }
  else {
    let randomSong = randomItem(album.songs);
    let newSongList = [...usedSongsList, randomSong.name]
    let newChars = addCharacters(currentText, randomSong.lyrics)

    return generateText(newChars, charLimit, album, newSongList)
  }
}

function generate(chars = 100, era = "ziggy-stardust") {
  let selectedEra = words[era];
  let randomAlbum = randomItem(selectedEra.albums);
  let result = generateText("", chars, randomAlbum, []);
  console.log(result);
  console.log("Number of characters: ", result.text.length)
  return result
}

const Generator = generate;

export default Generator;
