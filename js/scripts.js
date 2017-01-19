// BackEnd
var result;

function punctuationStripper(input) {
  var stripperArray = input.split("");
  for (var index = 0; index < stripperArray.length; index += 1){
    if (stripperArray[index] === '.' || stripperArray[index] === '!' || stripperArray[index] === ',' || stripperArray[index] === '?') {
      stripperArray[index] = "";
    } else {
    }
    var strippedString = stripperArray.join("");
  }
  return strippedString;
}


function translator(input){
  var inputArray = input.split(" ");
  var stringArray = [];

  inputArray.forEach(function(input){
    var word = punctuationStripper(input);
    // Vowel Test
    if (/^[aeiou]/ig.test(word.charAt(0))) {
      stringArray.push(word + "ay");
      // Y Test
    } else if (/^[y]/ig.test(word.charAt(0))) {
      var wordArray = word.split("");
      for (var index = 0; /^[yqwrtpsdfghjklzxcvbnm]/ig.test(word.charAt(index)); index += 1) {
        wordArray.push(word[index]);
        wordArray.shift();
      };
      var newWord = wordArray.join("") + "ay";
      stringArray.push(newWord);

      // Consonant Test
    } else if (/^[qwrtpsdfghjklzxcvbnm]/ig.test(word.charAt(0))) {
      var wordArray = word.split("");
      for (var index = 0; /^[qwrtpsdfghjklzxcvbnm]/ig.test(word.charAt(index)); index += 1) {
        // Q Test
        if (/^[q]/ig.test(word.charAt(index)) && /^[u]/ig.test(word.charAt(index + 1))) {
          wordArray.push(word[index]);
          wordArray.push(word[index + 1])
          wordArray.shift();
          wordArray.shift();
        } else {
          wordArray.push(word[index]);
          wordArray.shift();
        };
      };

      var newWord = wordArray.join("") + "ay";
      stringArray.push(newWord);

    } else {

    };
  });
  result = stringArray.join(" ");
  return result;
};

//Front End
$(function(){
  $("#blank").submit(function(event){
    event.preventDefault();
    var input = $("#input").val();
    var result = translator(input);
    $(".resultpane").slideDown();
    $(".result").text(result);

  });
});
