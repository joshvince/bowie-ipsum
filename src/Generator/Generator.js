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
  return textString.slice(0, safeSlicePos);
}

function findSentenceBoundary(slicePos, string) {
  let punctuation = [".", "!", "?"];
  if (punctuation.includes(string.charAt(slicePos))) {
    return slicePos+1
  }
  else {
    return findSentenceBoundary(slicePos-1, string)
  }
}

function generateText({currentText, charLimit, album, usedSongsList, numCharsAdded}) {
  const uniqueSongs = arr => [...new Set(arr)];
  let amountOverLimit = (currentText.length - charLimit);

  if (amountOverLimit > 0) {
    // We're over the limit, so we need to cut down and adjust the song list.
    let result = {};
    if (amountOverLimit > numCharsAdded) {
      /* We added too many characters in the last run, so we need to remove them
          and the song from the list */
      usedSongsList.pop()
    }

    result.songs = uniqueSongs(usedSongsList)
    result.text = cutToNearestWord(currentText, charLimit)
    return result;
  }
  else {
    let randomSong = randomItem(album.songs);
    let newText = addCharacters(currentText, randomSong.lyrics);
    let newpayload = arguments[0];

    if (newText.length > currentText.length) {
      // We should add the song to the list, because characters were added.
      newpayload.usedSongsList = [...usedSongsList, randomSong.name];
      newpayload.numCharsAdded = (newText.length - currentText.length);
    }
    else {
      // Don't bother adding the song to the song list, because nothing went in.
      newpayload.usedSongsList = usedSongsList;
      newpayload.numCharsAdded = 0;
    }

    newpayload.currentText = newText;
    newpayload.lastSong = randomSong;


    return generateText(newpayload)
  }
}

function generate(charLimit = 100, era = "ziggy-stardust") {
  let selectedEra = words[era];
  let initialPayload = {
    currentText: "",
    charLimit: charLimit,
    album: randomItem(selectedEra.albums),
    usedSongsList: [],
    numCharsAdded: 0
  }
  let result = generateText(initialPayload)
  console.log(result);
  console.log("Number of characters: ", result.text.length)
  return result
}

const Generator = generate;

export default Generator;
