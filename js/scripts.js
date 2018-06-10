//bad global to track if we have a square
var isSquare = false;

function scrubInput(input) {
  var scrubbed = input.replace(/[ -=`~!@#$%^&*()_+{}\[\]:";'<>?,./'"`]*/g,"").toLowerCase();
  return scrubbed;
}

function splitToLetters(string) {
  return string.split("");
}

function checkSquare(arrayLength) {
  var square = Math.sqrt(arrayLength);
  if (square % 1 === 0) {
    //perfect square
    isSquare = true;
    return square;
  } else {
    //is float
    return parseInt(square) + 1;
  }
}

function buildArray(letters, length) {
  adjustedLength = lengthAdjustment(length);
  var storageArray = [];
  var j = -1;
  for (var i = 0; i < adjustedLength; i++) {
    console.log("i: " + i);
    j++;
    for (j = j; j < letters.length; j += (adjustedLength)) {
      console.log("j: " + j + " / " + letters[j]);
      storageArray.push(letters[j]);
    }
    j = 0;
    j += i;
  }
  return storageArray;
}

//if we do not have a square, adjust the length values of our loops
function lengthAdjustment(length) {
  if (isSquare) {
    return length;
  } else {
    return length - 1;
  }
}

function displayResult(result) {
  result = result.join("");
  arrayResult = [];
  for(i = 0, length = result.length; i < length; i += 5) {
    //add a space every 5th letter
    arrayResult.push(result.substr(i, 5));
  }
  arrayResult = arrayResult.join(" ");
  console.log(arrayResult);
}

$(document).ready(function() {
  //var input = "don't compare yourself to others, compare yourself to the person you were yesterday";
  //var input = "you are bad";
  var input = "time like your time";
  var scrubbed = scrubInput(input);
  console.log(scrubbed);
  var letters = splitToLetters(scrubbed);
  console.log(letters);
  var length = checkSquare(letters.length);
  console.log(length);
  var result = buildArray(letters, length);
  console.log(result);
  displayResult(result);
});
