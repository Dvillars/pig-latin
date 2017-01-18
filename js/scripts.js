
var result;

function translator(input){
  if (/^[aeiou]$/ig.test(input.charAt(0))) {
    result = input + "ay";

  } else if (/^[y]$/ig.test(input.charAt(0))) {
    var wordArray = input.split("");

    for (var index = 0; /^[yqwrtpsdfghjklzxcvbnm]/ig.test(input.charAt(index)); index += 1) {
      wordArray.push(input[index]);
      wordArray.shift();
    };
    result = wordArray.join("") + "ay";

  } else if (/^[qwrtpsdfghjklzxcvbnm]/ig.test(input.charAt(0))) {
    var wordArray = input.split("");

    for (var index = 0; /^[qwrtpsdfghjklzxcvbnm]/ig.test(input.charAt(index)); index += 1) {
      wordArray.push(input[index]);
      wordArray.shift();
    };
    result = wordArray.join("") + "ay";
  } else {

  };
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


// TESTING FOR QU
// for (var index = 0; index < input.length; index += 1){
//
//   if (/(qu)/ig.test(input.slice(index, index + 1))) {
//     newWord = input.slice(index + 2) + input.slice(index, index + 1);
//   };
// result = newWord + "ay";
// };
