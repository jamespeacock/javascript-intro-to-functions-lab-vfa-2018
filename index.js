var shout = function(word) {
  return word.toUpperCase();
}

var whisper = function(word) {
  return word.toLowerCase();
}

function sayHiToGrandma(string)  {
  if (string === "I love you, Grandma") {
    return "I love you too!"
  }
  if (string.toUpperCase() === string) {
    return "";
  }
  if (string.toLowerCase() === string) {
    return "";
  }
}