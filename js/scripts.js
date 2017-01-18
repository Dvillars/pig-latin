
var result;

function translator(input){
  var inputArray = input.split(" ");
  var stringArray = [];

  inputArray.forEach(function(input){
    // Vowel Test
    if (/^[aeiou]/ig.test(input.charAt(0))) {
      stringArray.push(input + "ay");
      // Y Test
    } else if (/^[y]/ig.test(input.charAt(0))) {
      var wordArray = input.split("");
      for (var index = 0; /^[yqwrtpsdfghjklzxcvbnm]/ig.test(input.charAt(index)); index += 1) {
        wordArray.push(input[index]);
        wordArray.shift();
      };
      var newWord = wordArray.join("") + "ay";
      stringArray.push(newWord);

      // Consonant Test
    } else if (/^[qwrtpsdfghjklzxcvbnm]/ig.test(input.charAt(0))) {
      var wordArray = input.split("");
      for (var index = 0; /^[qwrtpsdfghjklzxcvbnm]/ig.test(input.charAt(index)); index += 1) {
        // Q Test
        if (/^[q]/ig.test(input.charAt(index)) && /^[u]/ig.test(input.charAt(index + 1))) {
          wordArray.push(input[index]);
          wordArray.push(input[index + 1])
          wordArray.shift();
          wordArray.shift();
        } else {
          wordArray.push(input[index]);
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

$(function(){
  $("#blank").submit(function(event){
    event.preventDefault();
    var input = $("#input").val();
    var result = translator(input);

    $(".result").text(result);

  });
});
