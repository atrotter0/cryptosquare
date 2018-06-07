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
    return square;
  } else {
    //is float
    return parseInt(square) + 1;
  }
}

function buildArray(letters, length) {
  var storageArray = [];
  var j = -1;
  for (var i = 0; i < length - 1; i++) {
    j++;
    for (j = j; j < letters.length; j += (length - 1)) {
      storageArray.push(letters[j]);
    }
    j = 0;
    j += i;
  }
  return storageArray;
}

function displayResult(result) {
  result = result.join("");
  arrayResult = [];
  for(i = 0, len = result.length; i < len; i += 5) {
   arrayResult.push(result.substr(i, 5));
  }
  arrayResult = arrayResult.join(" ");
}

$(document).ready(function() {
  var input = "don't compare yourself to others, compare yourself to the person you were yesterday";
  var scrubbed = scrubInput(input);
  console.log(scrubbed);
  var letters = splitToLetters(scrubbed);
  console.log(letters);
  var length = checkSquare(letters.length);
  var built = buildArray(letters, length);
  displayResult(built);
});
