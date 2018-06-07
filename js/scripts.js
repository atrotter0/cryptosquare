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

$(document).ready(function() {
  var input = "thisthisthisthiss";
  var scrubbed = scrubInput(input);
  var letters = splitToLetters(scrubbed);
  var length = checkSquare(letters.length);
  console.log(length);
});
